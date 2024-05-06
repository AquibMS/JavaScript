// A Domain Name System (DNS) translates domain names to IP addresses which are then used by browsers to load internet resources. For quicker DNS lookups, browsers often store a number of recent DNS queries in a DNS cache. Retrieving data from the cache is often faster than retrieving it from a DNS server. This task aims to simulate DNS resolution and determine the time taken to process different URLs.

// Assume that the DNS cache can store a maximum of the cache_size most recent DNS requests, l.e., URL-IP mappings. The cache is initially empty. It takes cache_time units of time to fetch data from the DNS cache, and server_time units of time to fetch data from the DNS server.

// Given a list of n URLs visited as an array of strings, urls, determine the minimum time taken to resolve each DNS request.

function minTimeDNS(urls, cache_size, cache_time, server_time){
    let newCache = new Map();
    let totalTime = 0;

    for(let url of urls){
        if(newCache.has(url)){
            totalTime += cache_time;
        } else{
            totalTime += server_time;
            newCache.set(url, true);

            if(newCache.size > cache_size){
                newCache.delete(newCache.keys().next().value);
            }
        }
    }
    return totalTime;
}

const urls = ["www.example.com", "www.example.com", "www.google.com", "www.openai.com"];
const cache_size = 3;
const cache_time = 2;
const server_time = 5;

console.log(minTimeToResolveDNS(urls, cache_size, cache_time, server_time));