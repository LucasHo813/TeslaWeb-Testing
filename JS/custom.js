// eslint-disable-next-line no-new, new-cap, no-undef
new fullpage('#fullpage', {
  licenseKey: 'gplv3-license',
  autoScrolling: true,
  scrollHorizontally: true,
  onLeave: function (origin, destination, direction, trigger) {
    // eslint-disable-next-line no-undef
    const loading2 = new TimelineMax()
    loading2
      .fromTo('.upper', 0.6, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      }, '+=0.5')
      .fromTo('.lower div', 0.6, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      }, '-=0.6')
  }
})

document.addEventListener('DOMContentLoaded', function () {
  // click function
  const arrows = document.getElementsByClassName('arrow')
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function (e) {
      e.preventDefault()
      // eslint-disable-next-line no-undef
      fullpage_api.moveSectionDown()
    })
  }

  // eslint-disable-next-line no-undef
  const loading = new TimelineMax()
  loading
    .fromTo('.upper h2', 0.6, {
      autoAlpha: 0,
      y: 20
    }, {
      autoAlpha: 1,
      y: 0
    })
    .fromTo('.upper p', 0.6, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    })
    .fromTo('.lower .btn1', 0.6, {
      autoAlpha: 0,
      x: -20
    }, {
      autoAlpha: 1,
      x: 0
    }, '-=0.6')
    .fromTo('.lower .btn2', 0.6, {
      autoAlpha: 0,
      x: 20
    }, {
      autoAlpha: 1,
      x: 0
    }, '-=0.6')
    .fromTo('.lower .arrow', 0.6, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    })
})
