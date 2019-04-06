var buttons = document.querySelectorAll('.accordion__btn');
var contents = document.querySelectorAll('.accordion__content');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.style.backgroundColor = "#fff";
            this.style.color = "#000";
        } else {
            for (let i = 0; i < contents.length; i++) {
                contents[i].style.maxHeight = null;
                buttons[i].style.backgroundColor = "#fff";
                this.style.color = "#000";
            }
            content.style.maxHeight = content.scrollHeight + 'px';
            this.style.backgroundColor = "#C92323"
            this.style.color = "#fff";
        }
    });
}