define([
    'Underscore',
    'hr/hr',
    'collections/users'
], function (_, hr, Users) {
    // Collection for all current collaborators
    var collaborators = new Users();

    return collaborators;
});