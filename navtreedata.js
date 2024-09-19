/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md82", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Scaling Shapes", "index.html#scaling-shapes", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md3", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md5", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md7", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md8", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md10", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md12", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md13", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md14", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md4", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md6", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md26", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md27", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md28", null ]
      ] ],
      [ "v5.1.0", "md__docs_2_release_notes.html#autotoc_md29", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md30", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md31", null ],
          [ "HeightField Shape", "md__docs_2_release_notes.html#autotoc_md32", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md33", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md34", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md35", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md36", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md37", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md38", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md39", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md40", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md41", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md42", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md43", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md44", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md45", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md46", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md47", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md48", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md49", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md50", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md51", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md52", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md53", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md54", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md55", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md56", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md57", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md58", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md59", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md60", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md61", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md62", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md63", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md64", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md65", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md66", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.1.0 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md17", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md18", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md19", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md20", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md21", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md22", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md23", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md24", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md25", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md68", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md69", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md70", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md71", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md72", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md73", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md74", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md75", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md76", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md77", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md78", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md79", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md80", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dad6af9c1eaff2a89ebd3f8d0c542be12b",
"_height_field_shape_8h.html#aa0b10266b35328efd7344f83bd4d9e8c",
"_object_stream_text_in_8cpp.html",
"_scale_helpers_8h_source.html",
"_sub_shape_i_d_pair_8h_source.html",
"class_a_a_box.html#a4082e61b6401d675d89d6b4944fd7911",
"class_body_creation_settings.html#a428f8482f140f5bd09e542d6d9c699c2",
"class_body_with_motion_properties.html",
"class_character_base.html#a82dfb80348cdbf3a08f97d54b225f77e",
"class_color.html#a0c9f1a84dc0774797c3ca7f08e2f2369",
"class_convex_hull_builder2_d.html#a249cc4fd8288bd1cf447d3d820e9dcd0a7cc57ee56f4f29991173f4efa7a469e9",
"class_d_vec3.html#a89b578e95bc0e6a1f97d28afc66256fd",
"class_e_p_a_convex_hull_builder_1_1_triangle.html#aba25cdfa6f65d1725a9138cc062e98ea",
"class_height_field_shape_settings.html#a8028cb21d400d589b670f0a88d25e4b8",
"class_job_system_single_threaded_1_1_barrier_impl.html",
"class_mesh_shape_settings.html#a53088eb2ee555b196c0e50cd5972e07b",
"class_object_stream_binary_out.html#a9a8860b8189ef78d0ed13b4d06bb2086",
"class_physics_system.html#a3ec396058f674026726e59dc7ad20609",
"class_quat.html#a21f44684684b475d9f5d02ed9c580def",
"class_result.html#a2de3e8315a673e4fc3e627eafad42586",
"class_shape_cast_result.html#afb01699f4368bbbeec678f0c3c21108d",
"class_slider_constraint_settings.html#a067096ef3ef94d99ba6d22b946145759",
"class_sphere.html#a1be9f865028172ade600ed25ca0aee4f",
"class_swing_twist_constraint.html#aff96015babd85fab3b262eee70a2a283",
"class_triangle_shape.html#a218f85b8e0fe0e50bb8dbf6de81b1986",
"class_vec4.html#a0c3d97968c479dcc0a08b98134c95e02",
"class_vehicle_engine.html#af916ceb8c4a323cee68c72465627901e",
"functions_func_t.html",
"namespace_half_float_conversion.html#a25cf44e188c51d03e061f23e1eabe36a",
"struct_compound_shape_1_1_get_intersecting_sub_shapes_visitor.html#a0f676ecd2951cd9c1abd7d3ebfa24561",
"struct_quad_tree_1_1_update_state.html#a66a138d55a9cfc44fd213bdace17b4a6"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';