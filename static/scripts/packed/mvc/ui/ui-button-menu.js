define(["utils/utils"],function(a){return Backbone.View.extend({optionsDefault:{id:"",title:"",floating:"right",icon:null,onclick:null,cls:"icon-btn",tooltip:"",target:"",href:"",onunload:null,visible:true,tag:""},$menu:null,initialize:function(c){this.options=a.merge(c,this.optionsDefault);this.setElement($(this._template(this.options)));var d=$(this.el).find(".root");var b=this;d.on("click",function(f){$(".tooltip").hide();f.preventDefault();if(b.options.onclick){b.options.onclick()}});if(!this.options.visible){this.hide()}d.tooltip({title:c.tooltip,placement:"bottom"})},show:function(){$(this.el).show()},hide:function(){$(this.el).hide()},addMenu:function(c){var d={title:"",target:"",href:"",onclick:null,divider:false,icon:null,cls:"button-menu btn-group"};d=a.merge(c,d);if(!this.$menu){$(this.el).append(this._templateMenu());this.$menu=$(this.el).find(".menu")}var b=$(this._templateMenuItem(d));b.on("click",function(f){f.preventDefault();if(d.onclick){d.onclick()}});this.$menu.append(b);if(d.divider){this.$menu.append($(this._templateDivider()))}},_templateMenuItem:function(c){var b='<li><a href="'+c.href+'" target="'+c.target+'">';if(c.icon){b+='<i class="fa '+c.icon+'"></i>'}b+=" "+c.title+"</a></li>";return b},_templateMenu:function(){return'<ul class="menu dropdown-menu pull-right" role="menu"></ul>'},_templateDivider:function(){return'<li class="divider"></li>'},_template:function(b){var c="";if(b.title){c="width: auto;"}var d='<div id="'+b.id+'" style="float: '+b.floating+"; "+c+'" class="ui-button-icon dropdown '+b.cls+'">';if(b.title){d+='<div class="root button dropdown-toggle" data-toggle="dropdown"><i class="icon fa '+b.icon+'"/>&nbsp;<span class="title">'+b.title+"</span></div>"}else{d+='<i class="icon fa '+b.icon+'"/>'}d+="</div>";return d}})});