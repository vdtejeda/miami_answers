// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var hnlAnswers=function(){};$(function(){$(".suggestion").ready(function(){var e=$(".suggestion a").text();$.ajax("/search.json",{data:{q:e},success:function(e){e.length==0&&$(".suggestion").hide()}})}),$(window).width()<=600&&searchControl.clearTransforms(),$(window).resize(function(){$(window).width()<=600?(window.location.pathname!="/"&&$("#navigation").addClass("mobileresults"),searchControl.clearTransforms()):$("#navigation").removeClass("mobileresults")})});