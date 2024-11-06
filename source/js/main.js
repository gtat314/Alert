/**
 * 
 * @employSchema
 * @eventListeners
 * @sensibleDefaults
 * @svgSrc
 * @documentation
 * @iconUniformNames
 * @propertify
 * @objectifyEventListeners
 * @documentationApi
 * @distinctEventListeners
 * @minimizeProperties
 * @parentElementSelector
 * @propertiesElemUnderscore
 * @methodNamingConventions
 * @propertyNamingConventions
 */




/**
 * 
 * @param {HTMLSourceElement} text
 */
function Alert( text ) {

    /**
     * 
     * @property
     * @private
     */
    this._alertElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._okElem = null;
    
    /**
     * 
     * @property
     * @private
     */
    this._handlerClick = this._destroy.bind( this );
    
    /**
     * 
     * @property
     * @private
     */
    this._handlerKeypress = this._evt_keypress.bind( this );

    var fragment = document.createDocumentFragment();

    this._alertElem = document.createElement( 'alert-mod' );
    fragment.appendChild( this._alertElem );

    var contentElem = document.createElement( 'DIV' );
    contentElem.classList.add( 'content' );
    this._alertElem.appendChild( contentElem );

    var textElem = document.createElement( 'P' );
    textElem.innerHTML = text;
    contentElem.appendChild( textElem );

    buttonsElem = document.createElement( 'DIV' );
    buttonsElem.classList.add( 'buttons' );
    contentElem.appendChild( buttonsElem );

    this._okElem = document.createElement( 'BUTTON' );
    this._okElem.classList.add( 'main' );
    this._okElem.textContent = 'OK';
    buttonsElem.appendChild( this._okElem );

    this._okElem.addEventListener( 'click', this._handlerClick );
    document.body.addEventListener( 'keypress', this._handlerKeypress );

    document.body.appendChild( fragment );

};

/**
 * 
 * @private
 */
Alert.prototype._destroy = function() {

    document.body.removeEventListener( 'keypress', this._handlerKeypress );
    this._okElem.removeEventListener( 'click', this._handlerClick );
    this._okElem = null;

    while ( this._alertElem.firstChild ) {

        this._alertElem.firstChild.remove();

    }

    this._alertElem.remove();
    this._alertElem = null;

};

/**
 * 
 * @private
 * @param {Event} evt 
 */
Alert.prototype._evt_keypress = function( evt ) {

    if ( evt.key === 'Enter' ) {

        evt.preventDefault();

        this._destroy();

    }

};