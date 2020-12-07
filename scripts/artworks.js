var Airtable = require('airtable');
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: 'keyeHmVa7KzDpvMig' }).base('appDSh5ktziSyb7Z1');

var loadData = function() {

    const language = document.getElementsByTagName('html')[0].lang;
    console.log('language: ' + language);
    let database = '';

    if (language === 'en') {
        database = 'artworks';
    } else {
        database = 'artworks-cn';
    }

    base(database).select({}).eachPage(function page(records, fetchNextPage) {

        console.log(records);
        for (var index = 0; index < records.length; index++) {
            var record = records[index];
            
            console.log('Retrieved ', record.get('Name'));
            console.log(record);

            // h2
            var h2Node = document.createElement('h2');
            var nameNode = document.createTextNode(record.get('Name'));
            h2Node.appendChild(nameNode);
            
            // img
            var imageNode = document.createElement('img');
            var imageUrl = record.get('Image')[0].thumbnails.large.url;
            imageNode.src = imageUrl;
            imageNode.className = 'artworks-img';
            imageNode.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                var detailImage = document.getElementById('detail-image');
                var detailImageUrl = this.getAttribute('src');
                detailImage.src = detailImageUrl;
                var detailView = document.getElementsByClassName('detail-view')[0];
                detailView.style.display = 'block';
                setTimeout(function() {
                    document.body.className = 'iscovered';
                    detailView.style.opacity = 1;
                    return;
                }, 100);
                return false;
            };
            
            // p
            var materialsNode = document.createTextNode(record.get('Materials'));
            var pNode = document.createElement('p');
            pNode.appendChild(materialsNode);
            
            // 创建 类为 background-box 的 section 元素信息
            var sectionNode = document.createElement('section');
            sectionNode.className = 'background-box';
            sectionNode.appendChild(h2Node);
            sectionNode.appendChild(imageNode);
            sectionNode.appendChild(pNode);

            document.getElementsByTagName('main')[0].appendChild(sectionNode);
        }
        fetchNextPage();
    }, function done(error) {
        console.log(error);
    });
};

loadData();

var initDetailView = function() {
    var detailView = document.getElementsByClassName('detail-view')[0];
    detailView.onclick = function() {
        detailView.style.opacity = 0;
        document.body.className = '';
        setTimeout(function() {
            detailView.style.display = 'none';
            return;
        }, 600);
    };
    return;
};

initDetailView();
