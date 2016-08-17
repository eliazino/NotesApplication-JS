//###
/* 
* This is the main class of the application
*/
class NotesApplication{
  /*
  * Setting the constructor (Mway)
  */
  constructor(Author){
  	this.Author = Author;
	this.Text = [];
	this.Counter = 0;
  }
	
	/*
	* And this Creates the notes
	*/
	create(note_content){
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
	/*
	*List note now supported, you can now view all your notes at once
	*@param is null for a valid session
	*/
	listNotes(){
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
	/*
	*Now you can make a precise search using the Note ID
	*@param note_id is the note ID
	*/
	_get(note_id){
		if(parseInt(note_id) && note_id > 0){
			var noteText = " \n Note ID: "+note_id+" \n "+this.Text[note_id+1]+" By Author \nl "+this.Author;
			return noteText;
		}
		else{
			return "The NoteId might be incorrect";
		}
	}
	/*
	*Now you can make a precise search using the Note ID
	*@param note_id is the note ID
	*/
	_search(search_text){
		if(search_text.length > 0){
			start = 0;
			searchResult = "Showing search result for ["+search_text+"]";
			while (start < this.Counter){
				note = this.Text[start];
				splitNote = note.split(search_text);
				if(splitNote.length > 1){
					searchResult = searchResult +" \nl Note ID: "+parseInt(start+1)+" \nl "+this.Text[start]+" By Author \nl "+this.Author;
					start++;
				}
				else{
					
				}
				start++;
			}
			return searchResult;
		}
		else{
			return "Sorry! You search query cannot be empty";
		}
	}
	/*
	*Now you can make a precise search using the Note ID
	*@param note_id is the note ID
	*/
	_delete(note_id){
		if(parseInt(note_id) && note_id > 0){
			newList = [];
			start = 0;
			counts = 0;
			while (start < this.Counter){
				if(start === note_id-1){
				}
				else{
					newList[counts] = this.Text[start];
					counts++
				}
				start++;
			}
			return "Your Note ID"+note_id+" was removed.";
		}
		else{
			return "Something went wrong and your request could not be completed";
		}
	}
	/*
	*Now you can make changes to the Note created
	*@param note_id is the note ID and newtext is the newtext
	*/
	_edit(note_id,newtext){
		if(parseInt(note_id) && note_id > 0 && note_id < note_id <= this.Counter+1){
			this.Text[note_id-1] = newtext;
			return "Text succesfully changed!"
		}
		else{
			return "The edit could not be completed";
		}
	}
}
