/* 
 * CodeSignal challenge "splitAddress"
 * 
 * https://app.codesignal.com/challenge/8ezof2mziSN8ZbS9C
 * 
 * Address of a website often has the following form: <protocol>://<domain>.com[/<context>]
 * where <protocol>, <domain> and <context> are non-empty strings consisting of lowercase
 * English letters.
 * 
 * Note that there may be no <context> part in an address.
 * 
 * We need an algorithm that splits an address into an array of its parts: <protocol>,
 * <domain> and <context> (if there is one).
 * 
 * Example
 * 
 * For address = "http://codesignal.com", the output should be
 * splitAddress(address) = ["http", "codesignal"];
 * 
 * For address = "http://stackoverflow.com/questions", the output should be
 * splitAddress(address) = ["http", "stackoverflow", "questions"].
 * 
 * Input/Output
 * 
 * [execution time limit] 4 seconds (js)
 * 
 * [input] string address
 * 
 * A valid website address.
 * 
 * Guaranteed constraints:
 * 15 ≤ address.length ≤ 35.
 * 
 * [output] array.string
 * 
 * Address elements <protocol>, <domain> and <context> placed in the given order.
 */

function splitAddress(address) {
        // Grab the protocol from before the "://"
        var protocol = address.slice(0,address.search("://"));
        // Trim off the protocol and "://" for convenience
        address = address.slice(address.search("://")+3,address.length);
        // Snip the domain from before the last dot
        var domain = address.slice(0,address.lastIndexOf("."));
        // If there's no context, just return an array of the protocol
        // and domain.
        if (address.search("/") == -1)
                return [protocol, domain];
        // Otherwise, grab the context by looking for everything after
        // the first remaining slash.
        var context = address.slice(address.search("/")+1,address.length)
        // Return all three strings.
        return [protocol, domain, context];
               
}
