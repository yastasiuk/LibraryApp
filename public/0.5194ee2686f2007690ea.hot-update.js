webpackHotUpdate(0,{

/***/ 10:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div ng-controller=\"MainCtrl as $ctrl\">\r\n        Reverse Hello {{$ctrl.invertString(firstName + ' ' + lastName)}}!\r\n        <div class=\"selected-book\">\r\n            <div>\r\n                <label>ID:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.id\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>Name:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.name\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>Author:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.author\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>Series:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.series_t\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>Sequence:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.sequence_i\" type='number'/>\r\n            </div>\r\n            <div>\r\n                <label>Genre:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.genre_s\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>In Stock:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.inStock\" type='checkbox'/>\r\n            </div>\r\n            <div>\r\n                <span>Price:</span>\r\n                <input ng-model=\"$ctrl.selectedBook.price\" type='number'/>\r\n            </div>\r\n            <div>\r\n                <span>Pages:</span>\r\n                <input ng-model=\"$ctrl.selectedBook.pages_i\" type='number'/>\r\n            </div>\r\n            <div>\r\n                <span>Cat:</span>\r\n                <input ng-model=\"$ctrl.selectedBook.cat\" type='text'/>\r\n            </div>\r\n        </div>\r\n        <button class=\"button\" ng-click=\"$ctrl.onSaveBook()\">SAVE INFO</button>\r\n        <button ng-click=\"$ctrl.onBooksClick()\">\r\n            Get Books\r\n        </button>\r\n        <br>\r\n        <book-list></book-list>\r\n    </div>\r\n</div>"

/***/ }

})