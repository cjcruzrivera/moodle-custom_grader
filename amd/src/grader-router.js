define([
    'local_customgrader/grader-component-main',
    'local_customgrader/grader-graphs',
    'local_customgrader/vendor-vue'
], function(g_c_main, g_graph, Vue) {
    var Grader = Vue.component(g_c_main.name, g_c_main.component);
    var Graph = Vue.component(g_graph.name, g_graph.component);
    var routes = [
        {path: '/', component: Grader},
        {path: '/bar'},
        /*{
            path: '*',
            component: Grader
        }*/
        {path: '/graph', component: Graph}
    ];
    return {
        routes: routes
    };
});