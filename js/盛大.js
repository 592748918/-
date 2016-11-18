/**
 * Created by wangyanjingdashuaige on 2016/11/7.
 */
$(function(){
    $.ajax({
        type:'get',
        url:'json/game1list.json',
        dataType:'json',
        success:function(data){
            var games1 = data.game1;
            var games2 = data.game2;
            var games3 = data.game3;
            var games4 = data.game4;
            var games5 = data.game5;
            var games6 = data.game6;
            var games7 = data.game7;
            var commgames = "     <li><a>";
            //图书类别变量
            var game1Str = "";
            var game2Str = "";
            var game3Str = "";
            var game4Str = "";
            var game5Str = "";
            var game6Str = "";
            var game7Str = "";
            for(var i=0;i<games1.length;i++){
                game1Str += commgames
                    +games1[i].game11+"</a></li>";
                game2Str += commgames
                    +games2[i].game21+"</a></li>";
                game3Str += commgames
                    +games3[i].game31+"</a></li>";
                game4Str += commgames
                    +games4[i].game41+"</a></li>";
                game5Str += commgames
                    +games5[i].game51+"</a></li>";
                game6Str += commgames
                    +games6[i].game61+"</a></li>";
                game7Str += commgames
                    +games7[i].game71+"</a></li>";
            }
            $('#game1').append(game1Str);
            $('#game2').append(game2Str);
            $('#game3').append(game3Str);
            $('#game4').append(game4Str);
            $('#game5').append(game5Str);
            $('#game6').append(game6Str);
            $('#game7').append(game7Str);

            /*for(var i=0;i<games.length;i++){
                $('#game11').append(games[i].game11);
            }*/

        }
    })
})