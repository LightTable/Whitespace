if(!lt.util.load.provided_QMARK_('lt.plugins.visible-whitespace')) {
goog.provide('lt.plugins.visible_whitespace');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');

lt.plugins.visible_whitespace.spaces_regex = /\s/;

lt.plugins.visible_whitespace.vs = (function (){var obj7224 = {" ":"visible-space","\t":"visible-tab","\n":"visible-newline"};return obj7224;
})();

lt.plugins.visible_whitespace.overlay = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",1124445547),(function (stream){var temp__4092__auto__ = stream.next();if(cljs.core.truth_(temp__4092__auto__))
{var cur = temp__4092__auto__;if(cljs.core.truth_(cur.match(lt.plugins.visible_whitespace.spaces_regex)))
{return ((stream.pos + "space ") + (lt.plugins.visible_whitespace.vs[cur]));
} else
{return null;
}
} else
{return null;
}
})], null));

lt.plugins.visible_whitespace.__BEH__show_whitespace = (function __BEH__show_whitespace(this$){return lt.objs.editor.__GT_cm_ed.call(null,this$).addOverlay(lt.plugins.visible_whitespace.overlay);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.visible-whitespace","show-whitespace","lt.plugins.visible-whitespace/show-whitespace",4485719718),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.visible_whitespace.__BEH__show_whitespace,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));

lt.plugins.visible_whitespace.__BEH__hide_whitespace = (function __BEH__hide_whitespace(this$){return lt.objs.editor.__GT_cm_ed.call(null,this$).removeOverlay(lt.plugins.visible_whitespace.overlay);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.visible-whitespace","hide-whitespace","lt.plugins.visible-whitespace/hide-whitespace",3338761769),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.visible_whitespace.__BEH__hide_whitespace,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-visible-whitespace","toggle-visible-whitespace",2004768067),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Toggle visible whitespace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(lt.object.in_tag_QMARK_.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword("lt.plugins.visible-whitespace","show-whitespace","lt.plugins.visible-whitespace/show-whitespace",4485719718))))
{lt.object.remove_tag_behaviors.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.visible-whitespace","show-whitespace","lt.plugins.visible-whitespace/show-whitespace",4485719718)], null));
return lt.object.tag_behaviors.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.visible-whitespace","hide-whitespace","lt.plugins.visible-whitespace/hide-whitespace",3338761769)], null));
} else
{lt.object.remove_tag_behaviors.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.visible-whitespace","hide-whitespace","lt.plugins.visible-whitespace/hide-whitespace",3338761769)], null));
return lt.object.tag_behaviors.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.visible-whitespace","show-whitespace","lt.plugins.visible-whitespace/show-whitespace",4485719718)], null));
}
})], null));

}

//# sourceMappingURL=