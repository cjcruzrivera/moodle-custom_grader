define([
    'local_customgrader/vendor-vuex',
    'local_customgrader/grader-enums',
    'local_customgrader/grader-store'
], function (Vuex, g_enums, g_store) {
    var template = `
            <div class="customgrader">
            
            <popup-weight v-if="!isWeightHundred"></popup-weight>
                <table v-if="students.length > 0" id="user-grades"  class="table">
                    <tbody>
                        <!-- COURSE_TR -->
                        <tr class="GridViewScrollHeader" >
                            <th-course colspan="2"></th-course>
                        </tr>
                        <!-- END OF COURSE_TR -->
                        <!-- CATEGORIES_TRS-->
                        <tr  v-for="categoryLevel in categoryLevels" >
                            <th v-bind:colspan="additionalColumnsAtFirstLength"></th>
                            <template v-for="(element, index) in categoryLevel">
                                <th v-if="element.type==='fillerfirst'" v-bind:colspan="element.colspan"></th>
                                <th-category v-if="element.type === 'category' " v-bind:colspan="element.colspan" v-bind:element="element">
                                   
                                </th-category>
                                <th 
                                class="th-filler"
                                v-if="element.type === 'filler' || element.type === 'fillerlast'" 
                                v-bind:colspan="element.colspan"
                                ></th>
                            </template>
                        </tr>
                        <!-- END OF CATEGORIES_TRS-->
                        <tr-items>  </tr-items>
                        <tr-grades 
                        v-for="(student, index) in students" 
                        v-bind:studentId="student.id" 
                        v-bind:studentIndex="index" 
                        ></tr-grades>
                    </tbody>
                </table>
                <div v-else>
                    Cargando información...
                </div>
                <div id="modals">
                    <modal-edit-category></modal-edit-category>
                    <modal-add-element></modal-add-element>
                </div>
                <v-dialog/>
            </div>
    `;
    var name = 'Main';
    var component  = {
        template: template,
        computed: {
            ...Vuex.mapState([
                'course',
                'categories',
                'additionalColumnsAtFirst',
                'additionalColumnsAtEnd'
            ]),
            ...Vuex.mapGetters([
                'categoryDepth',
                'itemsCount',
                'getCategoriesByDepth',
                'categoryLevels',
                'studentSetSorted',
                'itemLevel',
                'courseLevel',
                'isWeightHundred'
            ]),
            additionalColumnsAtFirstLength: function () {
                return this.additionalColumnsAtFirst.length;
            },
            students: function() {
                return this.studentSetSorted;
            },
            gradeHeaderColspan: function () {
                return Number(this.courseLevel.colspan) + this.additionalColumnsAtEndLength;
            },
            weightHundred: function () {
                return this.isWeightHundred;
            }

        },
        mounted: function () {
            this.$store.dispatch(g_store.actions.FETCH_STATE);
        }
    };
    return {
        component: component,
        name: name
    }
});