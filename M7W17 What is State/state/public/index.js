/* eslint-disable no-undef */
$(document).ready(() => {
  $('.increment').on('click', () => {
    const counter = Number($('.counter').text())
    $('.counter').text(counter + 1)
  })
})
