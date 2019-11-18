define([
    'local_customgrader/Chart',
    'local_customgrader/vue-chartjs'
], function (Chartjs, VueChartjs) {
    var template = `
        <button>click me</button>
    `;

    var name = 'Graph';
    var component  = {
        template: template
    };
    return {
        component: component,
        name: name
    }
})