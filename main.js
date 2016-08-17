//###
/* 
* This is the main class of the application
*/
function NotesApplication(Author){
  /*
  * Setting the constructor (Mway)
  */
	this.Author = Author;
	this.Text = [];
	this.Title = [];
	/*
	* And this Creates the notes
	*/
	this.CreateText = function CreateText(text,title){
		if(text === '' || title === '' || arguments.length < 2){
			return "Something went wrong with your request"
		}
		else{
			this.Text.push = text;
			this.Title.push = title;
			var gLine = this.Text.length + 1;
			return "Congratulations! Your Text number "+gLine+" Has been added. Now view your text";
		}
	}
}
