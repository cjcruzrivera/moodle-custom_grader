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
 * Pruebas unitarias para la función getTeacher() de
 * managers/grader_lib.php
 * @author David S. Cortés <david.cortes@correounivalle.edu.co>
 * @group local_customgrader
 */

require_once(__DIR__ . '/../managers/grader_lib.php');

class get_teacher_testcase extends advanced_testcase
{
    /**
     * Comprueba que cuando existe un curso con un profesor
     * asignado, la función getTeacher() retorna un string
     * con el nombre completo del profesor.
     */
    public function test_teacher_returned()
    {
        // Cuando se hagan modificaciones a la bd es necesario
        // incluir esta linea.
        $this->resetAfterTest(true);

        // Creación del usuario del profesor.
        $teacher = $this->getDataGenerator()->create_user();  

        // Creación del curso.
        $course = $this->getDataGenerator()->create_course();

        // Asignación del profesor al curso.
        $teacherroleid = 3; // El rol para un profesor actualmente en moodle es el 3.
        $this->getDataGenerator()->enrol_user($teacher->id, $course->id, $teacherroleid);

        $result = getTeacher($course->id);
        $this->assertIsString($result);
        $this->assertEquals($result, $teacher->firstname . ' ' . $teacher->lastname);
    } 

    /**
     * Comprueba el comportamiento de la función getTeacher() cuando
     * no existe el curso. Se espera que devuelva falso. 
     */
    public function test_teacher_does_not_exists()
    {
        $this->resetAfterTest(true);

        $course = $this->getDataGenerator()->create_course();

        $result = getTeacher($course->id);

        $this->assertFalse($result);
    }

    /**
     * Comprueba el comportamiento de la función getTeacher() cuando
     * no existe un profesor asignado al curso en cuestión.
     * Comportamiento esperado: se espera que devuelva falso.
     */
    public function test_course_does_not_exists()
    {
        $result = getTeacher(19210);
        $this->assertFalse($result);
    }
}
