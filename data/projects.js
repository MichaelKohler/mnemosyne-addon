self.port.on("show", function(){
    var xhr = $.ajax({
        url: "http://links.com:5000/project/", 
        dataType: "json"
    });
    xhr.done(function(data){
        $("#projects").html("");
        for(i=0;i<data.length;i++){
            //var option = $("<option/>");
            //option.attr("value", data[i].slug);
            //option.text(data[i].name);
            var div = $("<div/>");
            var option = $("<input/>");
            option.attr("type", "radio");
            option.attr("name", "project");
            option.attr("value", data[i].slug);
            option.attr("id", i);
            div.append(option);
            var label = $("<label/>");
            label.attr("for", data[i].slug);
            label.html(data[i].name);
            div.append(label);
            $("#projects").append(div);
        }

        $("input").on("click", function() {
            var project = data[parseInt($("input:checked").attr("id"))];
            self.port.emit("project-selected", project);
        });
    });
    xhr.fail(function(data){console.log(JSON.stringify(data))});
});