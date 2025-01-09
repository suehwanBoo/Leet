/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if (source === target) return 0;

    const graph = new Map();
    
    // 각 버스 노선마다 방문 가능한 정류장들을 연결하는 그래프 생성
    for (let i = 0; i < routes.length; i++) {
        for (let stop of routes[i]) {
            if (!graph.has(stop)) {
                graph.set(stop, []);
            }
            graph.get(stop).push(i);  // 이 정류장에 연결된 버스 노선 추가
        }
    }

    if(!graph.get(target) || !graph.get(source)) return -1;

    // BFS 시작
    const visitedStops = new Set();
    const visitedRoutes = new Set();
    const queue = [[source, 0]];  // [현재 정류장, 버스 수]
    visitedStops.add(source);

    while (queue.length > 0) {
        const [currentStop, busCount] = queue.shift();

        console.log(currentStop)
        for (let routeIdx of graph.get(currentStop)) {
            if (visitedRoutes.has(routeIdx)) continue;  
            visitedRoutes.add(routeIdx);


            for (let stop of routes[routeIdx]) {
                if (stop === target) return busCount + 1;
                if (!visitedStops.has(stop)) {
                    visitedStops.add(stop);
                    queue.push([stop, busCount + 1]);
                }
            }
        }
    }

    return -1; 
};