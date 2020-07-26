const docs = [
	{
		name: "Intro",
		description: `NightFox’s Lib for LibNDS.<br>Reference manual.<br>Version 20120318<br><br><br>http://www.nightfoxandco.com<br>http://www.nightfoxandco.com/forum<br>contact@nightfoxandco.com`
	},
	{
		name: "How to install",
		description: `Copy the NFLIB folder in the root of your project folder.<br><br>To use it, just put in your code<br>#include <nf_lib.h><br><br>Copy also to the root folder of your project the files<br>“makefile” and “icon.bmp”. You must modify those files to<br>adapt them to your project.`
	},
	{
		name: "#include “nf_basic.h”",
		description: ``,
		function: [
			{
				name: "NF_Error",
				function: `void NF_Error( \n	u16 code,		// Error code\n	const char* text,	// Description\n	u32 value		// Additional info\n);`,
				description: `Generates a error and stops program execution, showing on the screen the error.<br>This command it’s internaly used by the lib to generate debug messages and rarely will<br>be used in you code.`,
				example: `NF_Error(112, “Sprite”, 37);`,
				example_description: `Generates a error with code 112, with the text “sprite” as description and a value of 37.`
			}
		]
	}
]

const doclist = document.getElementById("docs")
const list = document.getElementById("list")

docs.forEach(doc => {
	const div = document.createElement("div")
	div.className = "item"
	
	const name = document.createElement("a")
	name.className = "name"
	name.innerHTML = doc.name
	div.append(name)

	const description = document.createElement("p")
	description.className = "description"
	description.innerHTML = doc.description
	div.append(description)

	if (doc.function) {
		const function_div = document.createElement("div")
		function_div.className = "function"

		doc.function.forEach(func => {
			const funcdiv = document.createElement("div")
			funcdiv.className = "item2"

			const name = document.createElement("a")
			name.className = "name blue"
			name.innerHTML = func.name
			funcdiv.append(name)

			const pre1 = document.createElement("pre")
			pre1.innerHTML = func.function.trim()
			funcdiv.append(pre1)

			const description1 = document.createElement("p")
			description1.innerHTML = func.description
			funcdiv.append(description1)

			const pre2 = document.createElement("pre")
			pre2.innerHTML = func.example
			funcdiv.append(pre2)

			const description2 = document.createElement("p")
			description2.innerHTML = func.example_description
			funcdiv.append(description2)
			
			function_div.append(funcdiv)
		})

		div.append(function_div)
	}

	doclist.append(div)
})

document.querySelector("#docs").childNodes.forEach(data => {
	const div = document.createElement("div")

	const tag = document.createElement("a")
	tag.innerHTML = data.querySelector(".name").innerHTML
	tag.onclick = () => {
		data.scrollIntoView()
	}
	div.append(tag)
	
	data.querySelectorAll(".function").forEach(res => {
		const func = document.createElement("a")
		func.className = "blue small"
		func.innerHTML = " -- " + res.querySelector(".name").innerHTML
		func.onclick = () => {
			res.scrollIntoView()
		}
		div.append(func)
	})

	list.append(div)
});