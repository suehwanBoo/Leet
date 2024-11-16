/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

function bfs(email, graph, visit) {
    const queue = [email];
    const value = [email];
    visit[email] = true;

    while(queue.length) {
        const e = queue.shift();
        for(let nextEmail of graph[e]) {
            if(!visit[nextEmail]) {
                visit[nextEmail] = true;
                value.push(nextEmail);
                queue.push(nextEmail);
            }
        }
    };

    return value.sort();
}

var accountsMerge = function(accounts) {
   const graph = {};
   const visit = {}
   for(let acc of accounts) {
    const name = acc[0];
    graph[name] = graph[name] || {};
    visit[name] = visit[name] || {};
    for(let i = 1; i < acc.length; i++) {
        graph[name][acc[i]] = graph[name][acc[i]] || [];
        visit[name][acc[i]] = false;
        for(let j = 1; j < acc.length; j++) {
            if(i === j) continue;
            graph[name][acc[i]].push(acc[j]);
        }
    }
   }

   const result = [];
   for(let name in graph) {
    for(let email in graph[name]) {
        if(!visit[name][email]) {
            const commonEmails = bfs(email, graph[name], visit[name]);
            result.push([name, ...commonEmails]);
        }
    }
   }

   return result;
};