/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graphInfo = {};
    for(let pre of prerequisites) {
        const first = pre[0];
        const second = pre[1];
        if(graphInfo[second]) graphInfo[second].push(first);
        else graphInfo[second] = [first];
    }
    for(let key in graphInfo) {
        const queue = [key];
        const root = {[key]: true};
        const visit = {};
        while(queue.length) {
            const course = queue.shift();
            visit[course] = true;
            for(let i = 0; i < graphInfo[course]?.length; i++) {
                const next = graphInfo[course][i];
                if(root[next]) return false;
                if(!visit[next]) {
                    queue.push(next);
                }
            }
        }
    }
    return true;
};