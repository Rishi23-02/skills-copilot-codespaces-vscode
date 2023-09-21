function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberCntroller',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: ';;;'
        }
    };
} 