define([
    'local_customgrader/vendor-vue',
    'local_customgrader/grader-utils',
    'core/config',
], function (Vue, g_utils,  cfg) {
    var COURSE_ID = g_utils.getCourseId();
    var BASE_URL = `${cfg.wwwroot}/local/customgrader/managers`;
    var api_service = {
        get: (resource) => {
            return Vue.http.get(`${BASE_URL}/api.php/${resource}`)
                .then (response => response.body)
                .catch(response => console.error(response))
        } ,
        delete: (resource) => {
            return Vue.http.delete(`${BASE_URL}/api.php/${resource}`)
                .then (response => response.body)
                .catch(response => console.error(response))
        },
        post: (resource, data) => {
            const data_ = {
                ...data,
                course: COURSE_ID
            };
            return Vue.http.post(`${BASE_URL}/api.php/${resource}`, data_)
                .then( response=> response.body )
                .catch(response => console.error(response));
        },
        put: (resource, data) => {
            const data_ = {
                ...data,
                course: COURSE_ID
            };
            return Vue.http.put(`${BASE_URL}/api.php/${resource}`, data_)
                .then( response=> response.body )
                .catch(response => console.error(response));
        }
    };
   return {
       get_grader_data: (courseId) => {
           return api_service.get(`grader/${courseId}`);
       },

       update_grade: (grade, courseId) => {
           const send_info = {...grade, courseid: courseId};
           return api_service.post('grade/update', send_info);
       },
       update_category: (category) => {
           const send_info = { category };
           return api_service.post('category/update', send_info);
       },
       update_item: (item) => {
           const send_info = { item };
           return api_service.post('item/update', send_info);
       },

       add_category: (category, weight) => {
           const send_info = { category,  weight};
           return api_service.post('category/add', send_info);
       },
       add_item: (item) => {
           const send_info = { item: item };
           return api_service.post('item/add', send_info);
       },
       add_partial_exam: (partial_exam) => {
         const send_info = { partial_exam };
         return api_service.post('partial_exam/add', send_info)
       },

       delete_item: (itemId) => {
           return api_service.get(`/item/delete/${itemId}`);
       },
       delete_category: (categoryId) => {
           return api_service.get(`/category/delete/${categoryId}`);
       }
   };
});