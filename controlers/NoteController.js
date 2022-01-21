import { notes, addNote, editNote, removeNote, archivingNote, categoriesNotesCount } from "../services/model.js";
import validationsSchema from "../helpers/validation.js";

class NoteController {

    async createNote(req, res) {
        try {
            const { content, category } = await validationsSchema.validate(req.body);
            res.json(addNote(content, category));

        } catch (e) {
            res.status(400).json(e);
        }
    }

    getAllNotes(req, res) {
        try {
            res.json(notes);
        } catch(e) {
            res.json(e);
        }
    }

    getOneNote(req, res) {
        try {
            const { id } = req.params;
            const note = notes[id];
            if (!note) {
                throw 404;
            }
            res.json(note);
        } catch(e) {
            res.status(e).json();
        }
    }

    async editNote(req, res) {
        try {
            const { id } = req.params;
            const { content, category } = await validationsSchema.validate(req.body);
            res.json(editNote(id, content, category));
        } catch (e) {
            res.status(400).json(e);
        }
    }

    changeArchiving(req, res) {
        try {
            const { id } = req.params;
            const note = notes[id];
            if (!note) {
                throw 404;
            }
            res.json(archivingNote(id));
        } catch(e) {
            res.status(e).json();
        }
    }

    deleteNote(req, res) {
        try {
            const { id } = req.params;
            const note = notes[id];
            if (!note) {
                throw 404;
            }
            removeNote(id);
            res.json();
        } catch(e) {
            res.status(e).json();
        }
    }

    getStatistics(req, res) {
        res.json(categoriesNotesCount());
    }
}

export default new NoteController();