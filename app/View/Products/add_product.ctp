<head>
<meta charset="utf-8">
<title>jQuery UI Autocomplete - Combobox</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<style>
.custom-combobox {
position: relative;
display: inline-block;
}
.custom-combobox-toggle {
position: absolute;
top: 0;
bottom: 0;
margin-left: -1px;
padding: 0;
/* support: IE7 */
*height: 1.7em;
*top: 0.1em;
}
.custom-combobox-input {
margin: 0;
padding: 0.3em;
}
</style>
<script>
(function( $ ) {
$.widget( "custom.combobox", {
_create: function() {
this.wrapper = $( "<span>" )
.addClass( "custom-combobox" )
.insertAfter( this.element );
this.element.hide();
this._createAutocomplete();
this._createShowAllButton();
},
_createAutocomplete: function() {
var selected = this.element.children( ":selected" ),
value = selected.val() ? selected.text() : "";
this.input = $( "<input>" )
.appendTo( this.wrapper )
.val( value )
.attr( "title", "" )
.addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
.autocomplete({
delay: 0,
minLength: 0,
source: $.proxy( this, "_source" )
})
.tooltip({
tooltipClass: "ui-state-highlight"
});
this._on( this.input, {
autocompleteselect: function( event, ui ) {
ui.item.option.selected = true;
this._trigger( "select", event, {
item: ui.item.option
});
},
autocompletechange: "_removeIfInvalid"
});
},
_createShowAllButton: function() {
var input = this.input,
wasOpen = false;
$( "<a>" )
.attr( "tabIndex", -1 )
.attr( "title", "Show All Items" )
.tooltip()
.appendTo( this.wrapper )
.button({
icons: {
primary: "ui-icon-triangle-1-s"
},
text: false
})
.removeClass( "ui-corner-all" )
.addClass( "custom-combobox-toggle ui-corner-right" )
.mousedown(function() {
wasOpen = input.autocomplete( "widget" ).is( ":visible" );
})
.click(function() {
input.focus();
// Close if already visible
if ( wasOpen ) {
return;
}
// Pass empty string as value to search for, displaying all results
input.autocomplete( "search", "" );
});
},
_source: function( request, response ) {
var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
response( this.element.children( "option" ).map(function() {
var text = $( this ).text();
if ( this.value && ( !request.term || matcher.test(text) ) )
return {
label: text,
value: text,
option: this
};
}) );
},
_removeIfInvalid: function( event, ui ) {
// Selected an item, nothing to do
if ( ui.item ) {
return;
}
// Search for a match (case-insensitive)
var value = this.input.val(),
valueLowerCase = value.toLowerCase(),
valid = false;
this.element.children( "option" ).each(function() {
if ( $( this ).text().toLowerCase() === valueLowerCase ) {
this.selected = valid = true;
return false;
}
});
// Found a match, nothing to do
if ( valid ) {
return;
}
// Remove invalid value
this.input
.val( "" )
.attr( "title", value + " didn't match any item" )
.tooltip( "open" );
this.element.val( "" );
this._delay(function() {
this.input.tooltip( "close" ).attr( "title", "" );
}, 2500 );
this.input.data( "ui-autocomplete" ).term = "";
},
_destroy: function() {
this.wrapper.remove();
this.element.show();
}
});
})( jQuery );
$(function() {
$( "#combobox" ).combobox();
$( "#toggle" ).click(function() {
$( "#combobox" ).toggle();
});
});
</script>
</head>

<div class="users-parent">
    <div class="form-add-artiste">
       <div class="form-header">
        Complete Profile
       </div>
      <?php echo $this->Form->create('Product', array('class'=>'form-horizontal'));?>
        <?php echo $this->Form->input('name', array('placeholder'=>'Artiste stage name', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo ('<div class="info">In the box below type the full name (name used to register) of the artiste then select it from the dropdown box</div>');
        echo $this->Form->input('user_id', array(
           'type' => 'select',
           'options' => $lstname,
		   'empty' => 'Type Full Name Of The Artiste Then SELECT The Name From The Dropdown',
		    'class' => 'form-control',
			'placeholder' => 'Type Full Name Of The Artiste Then SELECT The Name From The Dropdown',
			'id' => 'combobox',
			'label' => false,
			'div' => 'form-group',
			  ));
		echo $this->Form->textarea('summary', array('placeholder'=>'Describe the artiste, his/her history in the music business and more', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->textarea('role_model', array('placeholder'=>'artiste role model in life, start this as: My role model is...', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->textarea('fav_song', array('placeholder'=>'artiste favourite song, start this as: My favourite song is...', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control', 'rows'=>'6', 'cols'=>'5'));
		echo $this->Form->input('trailer', array('placeholder'=>'Put the last 11 letters and digits of artiste youtube video url here', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
        echo ('<div class="ui-widget">');
        echo $this->Form->input('genre_id', array(
          'type' => 'select',
          'options' => $genres,
          'empty' => 'Your Music Genre',
	      'class'=>'form-control',
	      'id' => 'combobox',
	      'label'=>false,
	      'div'=>'form-group',
           ));
          echo ('</div>');
		echo ('<div class="btn-group"> ');
		echo $this->Form->submit('Continue', array('class' => 'form-submit btn btn-default',  'title' => 'click to continue to add photos') ); 
      ?>
	</div>
</div>

</div>


