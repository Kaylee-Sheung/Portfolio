var Airtable = require('airtable');
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: 'keyeHmVa7KzDpvMig' }).base('appDSh5ktziSyb7Z1');

var loadData = function() {

    base('animations').select({}).eachPage(function page(records, fetchNextPage) {
        
        console.log(records);
        for (var index = 0; index < records.length; index++) {
            var record = records[index];
            
            console.log('Retrieved ', record.get('Name'));
            console.log(record);

            // 创建 类为 item-cell 的 div 元素信息
            var iframeNode = document.createElement('iframe');
            iframeNode.src = record.get('Url');
            iframeNode.frameBorder = 0;
            var itemCellNode = document.createElement('div');
            itemCellNode.className = 'item-cell';
            itemCellNode.appendChild(iframeNode);

            var itemList = document.getElementsByClassName('item-list')[0];
            itemList.appendChild(itemCellNode);
        }
        fetchNextPage();
    }, function done(error) {
        console.log(error);
    });
};

loadData();
