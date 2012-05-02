// Generated by CoffeeScript 1.3.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var AuthoredPresentation, Manage, Presentation, manage;
    Presentation = (function(_super) {

      __extends(Presentation, _super);

      Presentation.name = 'Presentation';

      function Presentation() {
        return Presentation.__super__.constructor.apply(this, arguments);
      }

      Presentation.prototype.defaults = {
        title: "No title set",
        thumb: "nothumb.png"
      };

      return Presentation;

    })(Backbone.Model);
    AuthoredPresentation = (function(_super) {

      __extends(AuthoredPresentation, _super);

      AuthoredPresentation.name = 'AuthoredPresentation';

      function AuthoredPresentation() {
        return AuthoredPresentation.__super__.constructor.apply(this, arguments);
      }

      AuthoredPresentation.prototype.model = Presentation;

      return AuthoredPresentation;

    })(Backbone.Collection);
    Manage = (function(_super) {

      __extends(Manage, _super);

      Manage.name = 'Manage';

      function Manage() {
        return Manage.__super__.constructor.apply(this, arguments);
      }

      Manage.prototype.el = $("body");

      Manage.prototype.initialize = function() {
        _.bindAll(this);
        new AuthoredPresentation().fetch();
        return this.render();
      };

      Manage.prototype.render = function() {
        var _this = this;
        dust.render("prova", {}, function(err, output) {
          return $(_this.el).append(output);
        });
        return this;
      };

      return Manage;

    })(Backbone.View);
    return manage = new Manage();
  });

  Backbone.sync = function() {
    return console.log(arguments);
  };

}).call(this);
