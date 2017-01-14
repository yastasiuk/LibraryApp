webpackHotUpdate(0,{

/***/ 10:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div ng-controller=\"MainCtrl as $ctrl\">\r\n        Reverse Hello {{$ctrl.invertString(firstName + ' ' + lastName)}}!\r\n        <div class=\"selected-book\">\r\n            <div>\r\n                <label>ID:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.id\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>Name:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.name\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>Author:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.author\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>Series:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.series_t\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>Sequence:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.sequence_i\" type='number'/>\r\n            </div>\r\n            <div>\r\n                <label>Genre:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.genre_s\" type='text'/>\r\n            </div>\r\n            <div>\r\n                <label>In Stock:</label>\r\n                <input ng-model=\"$ctrl.selectedBook.inStock\" type='checkbox'/>\r\n            </div>\r\n            <div>\r\n                <span>Price:</span>\r\n                <input ng-model=\"$ctrl.selectedBook.price\" type='number'/>\r\n            </div>\r\n            <div>\r\n                <span>Pages:</span>\r\n                <input ng-model=\"$ctrl.selectedBook.pages_i\" type='number'/>\r\n            </div>\r\n            <div>\r\n                <span>Cat:</span>\r\n                <input ng-model=\"$ctrl.selectedBook.cat\" type='text'/>\r\n            </div>\r\n        </div>\r\n        <button class=\"button\" ng-click=\"$ctrl.onSaveBook()\">SAVE INFO</button>\r\n        <button ng-click=\"$ctrl.onBooksClick()\">\r\n            Get Books\r\n        </button>\r\n        <br>\r\n        <div class=\"book-table\">\r\n            <div class=\"flex-box\">\r\n                <div class=\"id\">ID</div>\r\n                <div class=\"name\">Name</div>\r\n                <div>Author</div>\r\n            </div>\r\n            <div class=\"flex-box\" ng-repeat=\"book in $ctrl.bookList track by $index\">\r\n                <a href='' class=\"id\" ng-click=\"$ctrl.selectBook(book.id)\">{{book.id}}</a>\r\n                <div class=\"name\">{{book.name}}</div>\r\n                <div>{{book.author}}</div>\r\n                <div class=\"delete-book\" ng-click=\"$ctrl.delClick(book.id)\">CLICK TO DELETE</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

"use strict";
class LibraryService {
    constructor($log, $http) {
        this.log = $log;
        this.$http = $http;
    }
    book() {
        this.log.info('LibraryService', 'books');
        return this.$http.get('/api/books')//.then((succeed)=>{console.log('suc', succeed)}, (err)=>{console.log('err', err)});
    }
    editBook(id){
        return this.$http.get(`api/books/${id}`);
    }
    deleteBook(id){
        this.log.info(`Deleting books w/ id ${id}..`);
        return this.$http.delete(`/api/books/${id}`);
    }
    saveBookInfo(book){
        return this.$http.put(`/api/books/${book.id}`, book);
    }
}
/* harmony export (immutable) */ exports["a"] = LibraryService;


LibraryService.$inject = ['$log', '$http'];

/***/ }

})