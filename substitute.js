var xkcd=[];
xkcd["witnesses"]="these dudes I know";
xkcd["allegedly"]="kinda probably";
xkcd["new study"]="tumblr post";
xkcd["rebuild"]="avenge";
xkcd["space"]="spaaace";
xkcd["google glass"]="Virtual Boy";
xkcd["smartphone"]="Pok&eacute;dex";
xkcd["electric"]="atomic";
xkcd["senator"]="Elf-lord";
xkcd["car"]="cat";
xkcd["election"]="eating contest";
xkcd["congressional leaders"]="river spirits";
xkcd["homeland security"]="Homestar Runner";
xkcd["could not be reached for comment"]="is guilty and everybody knows it";
for (var i in xkcd) {
	var re=new RegExp(i + " ", "gi");
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace(re, xkcd[i] + " ");
	var re=new RegExp(" " + i, "gi");
	document.documentElement.innerHTML = document.documentElement.innerHTML.replace(re, " " + xkcd[i]);
};