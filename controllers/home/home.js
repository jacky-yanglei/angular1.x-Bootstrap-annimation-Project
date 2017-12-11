myApp.controller('homeCtrl',['$scope','$timeout','$state',function ($scope,$timeout,$state) {
    $(document).ready(function(){
        $('.js--triggerAnimation').click(function(e){
            e.preventDefault();
            var anim = $('.js--animations').val();
            testAnim(anim);
        });

        $('.js--animations').change(function(){
            var anim = $(this).val();
            testAnim(anim);
        });
    });
    function testAnim(x) {
        $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }
}]);