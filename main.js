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
	this.Counter = 0;
	/*
	* And this Creates the notes
	*/
	this.CreateText = function create(note_content){
		if(note_content === '' || arguments.length < 1){
			return "Something went wrong with your request"
		}
		else{
			if(note_content.constructor === Array){
				start = 0;
				while (start < note_content.length){
					this.Text[this.Counter] = note_content[start];
					start++
					this.Counter++;
				}
			}
			else{
				this.Text[this.Counter] = note_content;
				var gLine = this.Text.length + 1;
				this.Counter++
			}
			return "Congratulations "+this.Author+"! Your Text number "+gLine+" Has been added";
		}
	}
	this.listNotes = function listNotes(){
		var allNotesLength = this.Text.length;
		if(allNotesLength < 1){
			return "Yey!! No note has been created, Create One please";
		}
		else{
			var start = 0;
			var noteText = "";
			while (start < allNotesLength){
				noteText = noteText +" \nl Note ID: "+parseInt(start+1)+" \nl "+this.Text[start]+" By Author \nl "+this.Author;
				start++;
			}
			return noteText;
		}
	}
}
