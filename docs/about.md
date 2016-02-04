[about.me](https://about.me/inafev)


<div id="player" style="position: absolute; top: -9999px; left: -9999px;"></div>
<script src="http://www.youtube.com/player_api"></script>
<script>
var info = document.getElementById('info');
function onYouTubePlayerAPIReady() {
  var player = new YT.Player('player', {
      videoId: 'gzeOWnnSNjg', // this is the id of the video at youtube (the stuff after "?v=")
      loop: true,
      events: {
          onReady: function (e) {
              info.innerHTML = 'video is loaded';
              e.target.playVideo();
          },
          onStateChange: function (event) {
              if (event.data === 1) {
                  info.innerHTML = 'video started playing';
              }
          }
      }
  });
  // you can do more stuff with the player variable
}
</script>


# Awesome Tech

- A curated list of awesome IT projects and resources collected between 2014 and 2015. Inspired by the [awesome](https://github.com/sindresorhus/awesome) list.

# Inspired by
- [awesome sysadmin](https://github.com/kahun/awesome-sysadmin)
- [Awesome AWS](https://github.com/donnemartin/awesome-aws)
- [awesome docker](https://github.com/veggiemonk/awesome-docker)
- [awesome big data](https://github.com/onurakpolat/awesome-bigdata)
- [awesome openstack](http://ramitsurana.github.io/awesome-openstack/)
- [awesome django](https://gitlab.com/rosarior/awesome-django)
- [awesome python](https://github.com/vinta/awesome-python/)
- [awesome node.js](https://github.com/sindresorhus/awesome-nodejs)
- [awesome ruby](https://github.com/markets/awesome-ruby)
- [awesome php](https://github.com/ziadoz/awesome-php)

