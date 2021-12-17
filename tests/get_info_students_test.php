<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
/**
 * Pruebas unitarias para la función get_info_students() de
 * managers/grader_lib.php
 * @author Milton Garcia <ases.sistemas.regionales@correounivalle.edu.co>
 * @group local_customgrader
 */

require_once(__DIR__ . '/../managers/grader_lib.php');

class get_info_students_testcase extends advanced_testcase
{
    
    /* Comprueba que la funcion retorne un array el cual contenga los parametros solicitados (id, nombre, apellido y nombre de usuario) 
    de los estudiantes con acompañamiento ases del curso*/
    public function test_info_students_complete()

    {

        $this->resetAfterTest(true);//restablece a estado original

        // Crea usuario de estudiante.
        $student = $this->getDataGenerator()->create_user();  

        // Crea el curso
        $course = $this->getDataGenerator()->create_course();

        // Asigna estudiante al curso
        $studentroleid = 5;
        $this->getDataGenerator()->enrol_user($student->id, $course->id, $studentroleid);

        $result = get_info_students($course->id);
        $this->assertIsArray($result);

        $cnt = count($result);
        $cmpr = 0;

     function testNegativeForassertTrue() {
    
        if ($cnt == $cmpr) {
            
            $assertvalue = false;
            // Funcion de afirmacion que al marcar que contiene una falla nos indica que el curso en cuestion no 
            // posee estudiantes con acompañamiento ases de lo contrario cuenta con 1 o mas estudiantes
            $this->assertTrue(
                $assertvalue,
                "assert value is true or not"
            );
        }
    
          
    }

    
    
    } 


}
