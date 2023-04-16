Search.setIndex({"docnames": ["chapters/Creating_Plots_in_Jupyter_Notebooks", "chapters/File_Parsing", "chapters/Linear_Regression", "chapters/MolVis_with_iCN3D", "chapters/Processing_Multiple_Files_and_Writing_Files", "chapters/Working_with_Pandas", "chapters/biopython_mmcif", "chapters/introduction", "chapters/nonlinear_regression_part_1", "chapters/nonlinear_regression_part_2", "chapters/setup", "chapters/workshop_schedule"], "filenames": ["chapters/Creating_Plots_in_Jupyter_Notebooks.ipynb", "chapters/File_Parsing.ipynb", "chapters/Linear_Regression.ipynb", "chapters/MolVis_with_iCN3D.ipynb", "chapters/Processing_Multiple_Files_and_Writing_Files.ipynb", "chapters/Working_with_Pandas.ipynb", "chapters/biopython_mmcif.ipynb", "chapters/introduction.ipynb", "chapters/nonlinear_regression_part_1.ipynb", "chapters/nonlinear_regression_part_2.ipynb", "chapters/setup.ipynb", "chapters/workshop_schedule.ipynb"], "titles": ["Creating Plots in Jupyter Notebooks", "File Parsing", "Linear Regression", "Molecular Visualization with iCN3D", "Processing Multiple Files and Writing Files", "Working with Pandas", "Analyzing MMCIF Files using Biopython", "Introduction", "Nonlinear Regression Part 1", "Nonlinear Regression Part 2", "Set Up", "Workshop Schedule"], "terms": {"question": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "how": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "can": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "i": [0, 1, 2, 4, 5, 6, 7, 8, 9], "annot": [0, 8, 9], "my": [0, 5, 9], "data": [0, 1, 4, 6, 10], "object": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "repeat": [0, 2], "linear": [0, 5, 7, 8, 9, 11], "regress": [0, 3, 5, 11], "protein": [0, 1, 3, 4, 5, 6, 8, 9], "assai": [0, 2, 8], "obtain": [0, 6], "best": [0, 1, 2, 9], "fit": [0, 2, 4, 8], "statist": [0, 2, 9], "line": [0, 3, 4, 5, 6, 7, 8, 9], "includ": [0, 2, 4, 5, 6, 7, 8, 9, 11], "confid": 0, "interv": 0, "In": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "recent": [0, 1, 3, 6, 7, 9], "lesson": [0, 1, 2, 4, 5, 7, 8], "we": [0, 1, 2, 3, 4, 6, 7, 9, 10, 11], "have": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "learn": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "panda": [0, 9, 11], "import": [0, 1, 3, 6, 7, 9], "csv": [0, 1, 5, 8, 9], "datafram": [0, 9], "veri": [0, 1, 2, 4, 7, 9], "easi": [0, 1], "access": [0, 1, 2, 4, 7], "our": [0, 1, 2, 4, 5, 6, 7, 8, 9], "also": [0, 1, 2, 4, 5, 6, 7, 8, 9], "do": [0, 1, 2, 3, 4, 6, 7, 9, 11], "analysi": [0, 1, 2, 5, 7, 8, 9, 10], "scipi": [0, 8, 9], "thi": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11], "two": [0, 1, 2, 4, 5, 6, 7, 8, 9], "differ": [0, 1, 3, 4, 5, 6, 7, 9], "librari": [0, 1, 6, 8, 9], "As": [0, 1, 3, 5, 7, 8], "add": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11], "more": [0, 1, 2, 4, 5, 6, 7, 8, 9], "repretoir": 0, "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "go": [0, 2, 3, 4, 6, 7, 9, 10], "track": [0, 2, 8], "them": [0, 1, 2, 3, 4, 6, 7, 8, 9], "tabl": [0, 2, 5], "abbrevi": [0, 1, 2, 5], "os": [0, 2, 4, 5, 8, 9, 10], "file": [0, 2, 3, 5, 8, 9, 10, 11], "manag": [0, 1, 2, 4, 5, 8], "oper": [0, 1, 2, 4, 5, 10], "system": [0, 1, 2, 4, 5, 10], "numpi": [0, 2, 5, 8, 9], "calcul": [0, 2, 5, 7, 9], "np": [0, 2, 5, 8, 9], "pd": [0, 2, 5, 8, 9], "sc": [0, 2], "sp": [0, 2], "plt": [0, 9], "sn": 0, "start": [0, 1, 2, 3, 5, 8, 9], "regresson": 0, "from": [0, 1, 2, 4, 5, 6, 7, 8, 10], "previou": [0, 1, 2, 4, 7, 9], "protein_fil": [0, 1, 2], "path": [0, 2, 4, 5, 8, 9], "join": [0, 1, 2, 4, 5, 8, 9], "protein_assai": [0, 1, 2, 5], "results_df": [0, 2], "read_csv": [0, 2, 5, 8, 9], "xdata": [0, 2, 8, 9], "concentr": [0, 5, 7, 8, 9], "mg": [0, 2, 5], "ml": [0, 2, 5], "set": [0, 1, 2, 4, 5, 8, 9, 11], "x": [0, 1, 2, 3, 5, 8, 9], "valu": [0, 1, 4, 5, 6, 7, 8, 9], "ydata": [0, 2, 8, 9], "a595": [0, 2], "y": [0, 2, 3, 5, 8, 9], "stat": [0, 2, 8, 9], "slope": [0, 2, 9], "intercept": [0, 2, 8], "r_valu": [0, 2], "p_valu": [0, 2], "std_err": [0, 2], "linregress": [0, 2, 8, 9], "print": [0, 1, 2, 5, 6, 7, 8], "sep": [0, 1, 4, 5], "r": [0, 1, 2, 4, 8, 9], "squar": [0, 2, 7, 8, 9], "2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11], "p": [0, 2, 5, 8], "standard": [0, 1, 2, 8, 9], "error": [0, 1, 2, 8], "0": [0, 2, 3, 4, 5, 7, 8, 9], "8454285714285716": [0, 2], "12786666666666657": [0, 2], "994690398528738": [0, 2], "1": [0, 1, 2, 3, 4, 5, 6, 7, 9, 11], "0590717448341336e": [0, 2], "05": [0, 2, 4, 8, 9], "030884027089284245": [0, 2], "support": [0, 3], "static": 0, "anim": 0, "interact": [0, 6, 7], "visual": [0, 6, 10], "python": [0, 1, 2, 4, 6, 7, 8, 9, 11], "alongsid": 0, "provid": [0, 1, 2, 3, 6, 7, 8, 9], "matlab": 0, "style": [0, 3, 6], "you": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11], "fulli": 0, "high": [0, 1, 9], "resolut": [0, 1, 4, 5], "public": 0, "qualiti": [0, 9], "easili": [0, 4, 5, 6, 8, 9], "export": [0, 8], "inclus": 0, "report": [0, 1, 2], "manuscript": 0, "It": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10], "possibl": [0, 1, 3, 6, 8], "mani": [0, 1, 2, 3, 4, 5, 6, 8], "graph": [0, 9], "format": [0, 1, 2, 3, 5, 6, 8], "pictur": 0, "within": [0, 1, 2, 3, 4, 6, 7], "think": [0, 1, 4, 5, 6, 7], "chart": 0, "option": [0, 1, 4, 5, 8, 10, 11], "avail": [0, 2, 3, 8], "spreadsheet": [0, 4, 5, 8], "program": [0, 4, 5, 7, 10], "These": [0, 1, 2, 6, 8, 9], "all": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10], "plu": [0, 11], "one": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10], "subset": [0, 2, 7], "s": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "function": [0, 2, 4, 5, 6, 7, 8], "call": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "approach": [0, 3, 4], "similar": 0, "found": [0, 1, 2, 5, 6, 8], "contain": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "tool": [0, 2, 5, 6, 8, 9], "let": [0, 1, 2, 3, 4, 5, 7, 9], "simpl": [0, 2, 3, 5, 6, 8], "calibr": 0, "curv": [0, 7, 8, 9], "first": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "need": [0, 1, 4, 5, 6, 7, 8, 9, 10], "size": 0, "figur": [0, 7], "indic": 0, "figsiz": 0, "10": [0, 3, 5, 7, 8, 9], "5": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10], "collect": [0, 2, 5, 6, 8], "pathcollect": 0, "0x7fbfe2646f50": 0, "next": [0, 1, 2, 4, 7, 8, 10, 11], "were": [0, 2, 3, 5], "gener": [0, 1, 2, 4, 5, 7, 8, 9, 10], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11], "cell": [0, 1, 2, 3, 4, 5, 6, 7, 9], "ident": 0, "abov": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "again": [0, 1], "third": [0, 3, 5], "introduc": [0, 1, 2, 4, 5, 7, 11], "mai": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10], "notic": [0, 1, 2, 4, 5, 7, 8, 9], "delai": 0, "few": [0, 1, 3, 5, 6, 7, 10, 11], "second": [0, 1, 3, 4, 8, 9, 10], "complex": [0, 1, 2], "larger": [0, 2], "dataset": [0, 2], "longer": 0, "take": [0, 1, 2, 4, 5, 7, 10, 11], "appear": [0, 3, 5, 8, 9, 10], "6": [0, 1, 2, 4, 5, 7, 8, 9, 10], "line2d": [0, 9], "0x7fbfe266e7d0": 0, "label": [0, 5, 9, 10], "each": [0, 1, 2, 4, 5, 6, 7, 8, 9, 11], "axi": [0, 9], "subscript": [0, 9], "greek": 0, "letter": [0, 1, 3], "latex": [0, 9], "here": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "link": [0, 3], "help": [0, 1, 2, 4, 5, 9, 11], "site": [0, 1, 2, 5, 8], "about": [0, 5, 6, 8, 9, 10], "markdown": [0, 7], "text": [0, 1, 3, 4, 5, 6, 10], "khelifi": 0, "ahm": 0, "aziz": 0, "an": [0, 1, 2, 4, 5, 6, 8, 9], "inlin": 0, "equat": [0, 7], "dollar": 0, "sign": [0, 7], "type": [0, 1, 3, 4, 5, 6, 9, 10], "backslash": 0, "english": 0, "version": [0, 9], "mu": [0, 2, 8, 9], "end": [0, 1, 2, 4, 5, 7, 8], "exampl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "alpha": 0, "displai": [0, 1, 2, 8], "command": [0, 1, 2, 4, 5, 8], "f": [0, 4, 8], "which": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "stand": [0, 1, 5], "string": [0, 1, 2, 3, 5, 7, 8], "liter": 0, "By": [0, 8], "pull": [0, 1, 6], "enclos": [0, 4, 5], "variabl": [0, 1, 2, 3, 4, 5, 6, 8, 9], "name": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "brace": [0, 4, 9], "precis": [0, 9], "follow": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10], "4f": [0, 9], "where": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10], "4": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11], "number": [0, 2, 4, 5, 6, 7, 8, 9, 10], "decim": [0, 5, 9], "place": [0, 2, 4, 5, 8, 9, 10], "want": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10], "repres": [0, 1, 2, 3, 6, 7, 8], "datatyp": [0, 2], "float": [0, 1, 2, 4, 7, 8, 9], "xlabel": [0, 8, 9], "ylabel": [0, 9], "a_": [0, 2], "595": [0, 2, 9], "_": [0, 2, 6, 7, 8, 9], "make": [0, 2, 3, 4, 6, 8, 9, 10], "xy": [0, 9], "25": [0, 5, 7, 8], "8454": 0, "1279": 0, "some": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "time": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11], "plai": [0, 6], "code": [0, 1, 2, 3, 4, 5, 7, 8, 9, 11], "move": [0, 4, 5, 10], "lower": [0, 3, 7], "right": [0, 5, 8, 10], "hand": [0, 10], "corner": [0, 7, 10], "simpli": [0, 2, 3, 5, 8, 9], "chang": [0, 1, 2, 3, 4, 7, 8, 9], "pair": 0, "last": [0, 1, 3, 4, 5, 6, 7, 9], "ask": 0, "yourself": [0, 2], "why": [0, 1, 3, 4, 7], "didn": [0, 4, 7], "t": [0, 1, 3, 4, 5, 7, 10], "titl": [0, 1], "That": [0, 5], "certainli": 0, "wa": [0, 1, 2, 3, 4, 6, 9], "omit": [0, 8], "becaus": [0, 2, 4, 7, 9], "normal": 0, "separ": [0, 1, 4, 5, 6, 7], "detail": [0, 6, 9], "part": [0, 2, 3, 6, 11], "To": [0, 1, 4, 5, 6, 7, 8, 9], "savefig": 0, "produc": [0, 5, 8, 9], "suitabl": 0, "like": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "matter": 0, "get": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11], "syntax": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "ve": 0, "ad": [0, 2, 6, 9], "save": [0, 1, 4, 6, 7, 8, 9], "imag": [0, 1, 5, 6, 10], "current": [0, 1, 4, 5, 7], "g": [0, 5, 9], "bradford_plot": [0, 1, 5], "png": [0, 1, 5], "dpi": 0, "600": 0, "bbox_inch": 0, "tight": 0, "explor": [0, 1, 2, 3, 4, 5, 8], "wrote": 0, "onc": [0, 1, 2, 4, 5, 10], "execut": [0, 1, 3, 4, 7, 9], "should": [0, 1, 2, 4, 7, 8, 9, 10, 11], "find": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10], "same": [0, 1, 3, 4, 5, 6, 7, 8], "folder": [0, 1, 2, 4, 5, 8, 10], "argument": [0, 1, 5, 8, 9], "filenam": [0, 4], "singl": [0, 2, 4, 5, 7, 8, 9], "quot": [0, 1, 2, 4, 5, 9], "dot": [0, 1, 2, 4, 5], "per": 0, "inch": 0, "bound": [0, 1, 6], "box": [0, 3, 10], "mean": [0, 4, 7, 9], "extra": 0, "white": [0, 3, 9], "space": [0, 1, 9], "around": [0, 2, 9], "remov": [0, 1], "There": [0, 1, 2, 3, 5, 6, 7, 8, 9], "For": [0, 1, 2, 4, 5, 6, 7, 8, 9], "red": [0, 9], "could": [0, 1, 2, 3, 4, 5, 7, 8, 9], "modifi": [0, 1, 3, 4, 6], "base": [0, 2, 5, 8, 9], "ha": [0, 1, 3, 4, 5, 6, 7, 8, 9], "level": [0, 2], "group": [0, 3, 6, 7, 11], "sophist": 0, "pleas": [0, 2, 3, 8, 9], "note": [0, 2, 3, 5, 6, 8, 9], "depend": [0, 1, 2, 9], "other": [0, 1, 4, 6, 7], "so": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "must": [0, 1, 5, 7, 8, 10], "befor": [0, 1, 4, 5, 6, 8], "resourc": [0, 5, 8], "statolog": 0, "prefer": [0, 1, 2, 4], "reliabl": 0, "region": 0, "obviou": 0, "95": [0, 9], "emphas": 0, "valid": [0, 2], "rang": [0, 2, 9], "analyz": [0, 1, 2, 4, 5, 8], "absorb": [0, 2, 8], "below": [0, 1, 7, 10], "285": [0, 2], "118": [0, 2], "regplot": 0, "ax": [0, 8], "describ": [0, 1, 2, 6, 9, 10], "micropl": 0, "bit": [0, 3, 5, 9, 10], "protein_assay2": [0, 1, 5], "increas": [0, 6, 8], "default": [0, 1, 3, 9, 10], "taken": [0, 2, 3, 8], "column": [0, 5, 8], "header": [0, 1, 2, 5, 7], "A": [0, 2, 5, 6, 8, 9], "insert": [0, 4, 9], "final": [0, 2, 8], "look": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "someth": [0, 1, 7, 8, 9], "protein_file2": 0, "15": [0, 7, 8], "8": [0, 2, 3, 4, 5, 7, 8, 9], "bradford_plot2": [0, 1, 5], "sort": 1, "through": [1, 2, 3, 4, 6, 7, 8], "inform": [1, 3, 4, 6, 7, 8, 9], "extract": [1, 3, 4], "piec": [1, 4, 9], "open": [1, 3, 4, 5, 7, 10], "its": [1, 7, 10], "content": [1, 4, 5, 9], "manipul": [1, 2, 5], "new": [1, 2, 4, 7, 8, 9, 10], "One": [1, 3, 4, 6], "most": [1, 2, 3, 6, 7, 9, 10], "common": [1, 2, 6, 7], "task": [1, 4, 5, 6, 9], "research": [1, 10], "enorm": 1, "amount": [1, 4, 5], "being": [1, 2, 7, 11], "biochemistri": [1, 2, 3, 10, 11], "molecular": [1, 6, 9, 10, 11], "biologi": [1, 10, 11], "much": [1, 2, 4, 5, 7, 9], "pertain": 1, "sequenc": [1, 6], "structur": [1, 4, 5, 6, 7, 8], "pdb": [1, 4, 5, 6], "commonli": [1, 6], "us": [1, 3, 4, 7, 10], "macromolecular": 1, "been": [1, 7], "determin": [1, 2, 7], "experiment": [1, 2, 6, 8, 9], "method": [1, 2, 4, 5, 6], "interest": [1, 3, 6], "while": [1, 4, 5, 8], "web": 1, "when": [1, 2, 3, 4, 5, 7, 8, 9, 10], "would": [1, 2, 3, 4, 5, 6, 7, 8], "handi": 1, "specif": [1, 2, 4, 5, 6], "000": [1, 3], "keystrok": 1, "might": [1, 2, 3, 4, 5, 6, 7, 8], "small": [1, 6, 11], "molecul": [1, 4, 6], "macromolecul": 1, "section": [1, 6, 8, 10], "4eyr": [1, 4], "pdb_file": [1, 4, 5, 6], "directori": [1, 4, 5, 8], "jupyt": [1, 2, 3, 5, 9, 11], "notebook": [1, 2, 3, 5, 6, 8, 9, 11], "design": [1, 5, 6, 8, 11], "know": [1, 5, 7], "organ": [1, 6, 9], "window": [1, 3, 5, 10], "mac": [1, 5, 10], "linux": 1, "address": [1, 2, 7], "Then": [1, 2, 3, 4, 6, 9, 10], "ll": [1, 2, 3, 5, 6, 8, 9], "getcwd": [1, 5], "tell": [1, 2, 4, 5, 6, 7, 9], "comput": [1, 2, 4, 5, 6, 7, 8, 9, 10], "listdir": [1, 5], "list": [1, 2, 3, 4, 5, 6, 8, 9, 10], "full": [1, 6], "home": [1, 11], "runner": 1, "script": [1, 5, 10, 11], "biochemist": [1, 5, 6, 7, 10], "chapter": [1, 2], "linear_regress": [1, 5], "ipynb": [1, 5], "ipynb_checkpoint": [1, 5], "txt": [1, 4, 5], "processing_multiple_files_and_writing_fil": [1, 5], "file_pars": [1, 5], "biopython_mmcif": [1, 5], "workshop_schedul": [1, 5], "zip": [1, 5], "bradford_plot3": [1, 5], "working_with_panda": [1, 5], "nonlinear_regression_part_2": [1, 5], "creating_plots_in_jupyter_notebook": [1, 5], "molvis_with_icn3d": [1, 5], "setup": [1, 4, 5, 7], "introduct": [1, 5, 11], "nonlinear_regression_part_1": [1, 5, 9], "tag": 1, "what": [1, 4, 6, 7, 9, 11], "thei": [1, 2, 5, 6, 7], "three": [1, 3, 5, 6, 8, 9], "comma": [1, 5, 7], "portabl": 1, "network": 1, "graphic": 1, "page": [1, 6, 7, 9, 10], "out": [1, 2, 4, 5, 6, 7, 9], "enter": [1, 3, 5, 7, 10], "insid": [1, 4, 7], "parenthes": [1, 3, 5, 7, 9], "enzyme_kinet": [1, 5], "xlsx": [1, 5, 8], "chymotrypsin_kinet": [1, 5, 8], "ap_kin": [1, 5, 8], "chymo_mm_data": [1, 5, 8, 9], "ground_wat": [1, 2, 5], "mm_data1": [1, 5], "ap_kinet": [1, 5], "protein_sampl": [1, 2, 5], "thrombin_with_ligand": [1, 5], "mm_data_for_nlrpt2": [1, 5], "mm_data": [1, 5, 8, 9], "just": [1, 2, 4, 5, 7, 8, 9], "5veu": [1, 4], "1pmb": 1, "cif": [1, 6], "2pkr": [1, 4], "3iva": [1, 4], "5rsa": 1, "1mbn": [1, 6], "6zt7": [1, 4], "1a6n": 1, "1ddo": [1, 4], "3vnd": [1, 4], "7tim": [1, 4], "1a1t": [1, 6], "5eu9": [1, 4], "write": [1, 2, 5, 7, 8, 11], "usabl": 1, "ani": [1, 2, 3, 4, 5, 6, 7, 8, 9], "thu": 1, "allow": [1, 6, 7, 9], "defin": [1, 2, 3, 6, 7, 9], "wai": [1, 3, 4, 6, 9], "now": [1, 2, 3, 4, 5, 6, 7, 8, 9], "locat": [1, 4], "creat": [1, 4, 5, 6, 7, 10, 11], "directli": [1, 6, 10], "specifi": [1, 4, 6, 7], "filepath": [1, 4], "made": 1, "give": [1, 2, 4, 5, 7], "complet": [1, 2, 4, 5, 8, 9, 10], "anywher": 1, "user": [1, 7], "your_user_nam": 1, "desktop": [1, 10], "abspath": 1, "see": [1, 2, 3, 4, 5, 6, 7, 8, 9], "peopl": [1, 2, 7], "handl": [1, 4, 7], "howev": [1, 2, 5, 10], "3": [1, 2, 4, 5, 7, 8, 9, 10, 11], "pathlib": 1, "good": [1, 2, 4, 7], "perform": [1, 2, 5, 6, 7, 8, 9], "If": [1, 2, 3, 4, 5, 7, 8, 9, 10], "lot": [1, 6], "step": [1, 2, 3, 4, 5, 6, 8, 9], "process": [1, 2, 8, 9, 11], "filehandl": [1, 4, 8, 9], "accomplish": 1, "outfil": [1, 4], "after": [1, 2, 3, 4, 5, 7, 9], "close": [1, 4, 7], "context": [1, 4], "sai": [1, 6, 7, 10], "word": [1, 2, 4, 6], "begin": [1, 2, 6], "actual": [1, 2, 4, 9], "prevent": 1, "rememb": [1, 2, 3, 4, 5, 7, 8, 9], "assign": [1, 2, 3, 4, 5, 9, 11], "w": [1, 4], "append": [1, 2, 4, 7, 8], "notat": [1, 2, 4, 5], "act": 1, "given": [1, 10], "left": [1, 7, 8, 10], "element": [1, 5, 6, 7, 8], "alwai": [1, 2, 5, 7], "hiv": [1, 6], "proteas": 1, "inhibitor": 1, "ritonavir": 1, "onli": [1, 4, 5, 6, 7, 8, 9], "forget": 1, "equal": [1, 7, 9], "order": [1, 4, 5, 6], "correctli": [1, 7], "len": [1, 6, 7], "2232": 1, "crystal": [1, 6], "multidrug": 1, "resist": 1, "clinic": 1, "isol": 1, "769": 1, "state": 1, "previous": [1, 3, 5], "put": [1, 2, 6, 7], "loop": [1, 6, 8], "repeatedli": 1, "iter": [1, 5, 7], "five": [1, 2, 5, 8], "result": [1, 2, 3, 4, 9, 10], "run": [1, 2, 4, 7], "hydrolas": 1, "01": 1, "12": [1, 7, 9, 11], "OF": 1, "IN": 1, "WITH": 1, "caveat": 1, "ligand": [1, 3, 5], "rit": 1, "low": 1, "correl": 1, "AND": 1, "real": [1, 3, 4, 5], "compnd": [1, 4], "mol_id": 1, "editor": [1, 4, 5], "hetnam": 1, "heterogen": 1, "term": [1, 2, 4, 6, 9], "both": [1, 5, 7, 9], "drug": 1, "statement": [1, 2, 3, 4, 6, 9], "return": [1, 3, 5, 7, 9], "hetnam_lin": 1, "whole": [1, 4], "split": [1, 4], "up": [1, 3, 4, 8, 9, 11], "divid": [1, 7, 8], "compon": 1, "delimit": [1, 5], "parenthesi": [1, 3, 9], "try": [1, 3, 4, 5, 6, 7], "output": [1, 2, 4, 5, 8], "individu": [1, 6, 8, 10], "abbrev": 1, "than": [1, 2, 5, 7, 8, 9], "d": [1, 5, 8], "amino": [1, 5], "acid": 1, "oxidas": 1, "entri": [1, 3, 6], "keep": [1, 2, 4, 10, 11], "alreadi": [1, 4, 8, 11], "empti": [1, 4, 8], "hold": [1, 8], "hetnam_list": 1, "popul": [1, 8], "atom": [1, 4, 6], "achiev": 1, "desir": [1, 2, 3, 4], "protein_atom_lin": 1, "remark": 1, "1514": 1, "fifth": 1, "colon": [1, 3, 9], "n": [1, 4, 5, 8, 9], "dimer": 1, "monom": 1, "unit": [1, 2, 6, 7], "math": [1, 2], "messag": [1, 9], "typeerror": [1, 9], "traceback": [1, 3, 6, 7, 9], "14": [1, 4, 5, 7], "unsupport": 1, "operand": 1, "str": [1, 3, 4, 5, 7], "int": [1, 7], "even": [1, 7], "though": [1, 3, 7, 9], "realli": [1, 7], "cast": [1, 7], "thought": 1, "ahead": [1, 4], "origin": [1, 6, 9], "skill": [1, 2, 4], "temperatur": [1, 7], "experi": [1, 8], "rai": [1, 5], "diffract": [1, 5], "kelvin": 1, "298": 1, "reopen": 1, "keyword": [1, 3, 6, 9], "refin": 1, "exercis": [1, 4], "exp_type_lin": 1, "rstrip": 1, "temp_lin": 1, "seri": [1, 2, 4, 5, 8, 9], "seqr": 1, "99": [1, 6], "pro": 1, "gln": 1, "il": 1, "thr": 1, "leu": 1, "trp": 1, "arg": 1, "val": 1, "case": [1, 2, 3, 4, 5, 8, 9], "don": [1, 7, 10], "did": [1, 4, 8], "enumer": 1, "linenum": 1, "list_nam": [1, 7], "thing": [1, 3, 4, 5, 6, 7, 8], "els": 1, "exactli": [1, 7], "instead": [1, 3, 6, 7], "block": [1, 7, 9], "310": 1, "count": [1, 4, 5, 7, 9], "zero": [1, 7], "311": 1, "312": 1, "313": 1, "314": 1, "315": 1, "ly": 1, "gly": 1, "glu": 1, "ala": 1, "asn": 1, "asp": 1, "phe": 1, "tyr": 1, "cy": 1, "hi": [1, 2, 3, 5, 6, 8], "sometim": [1, 7], "match": [1, 4], "phrase": [1, 3], "Or": 1, "perhap": [1, 2], "capit": [1, 4, 8], "won": 1, "exact": [1, 2, 3, 7], "situat": [1, 2, 7], "re": [1, 2, 7, 10], "outsid": [1, 7], "scope": 1, "tutori": [1, 2, 5, 8], "futur": [1, 2, 5, 7], "autom": 1, "bore": 1, "stuff": 1, "book": 1, "great": [1, 3, 10], "test": [1, 2, 4, 9], "regex": 1, "flexibl": 1, "seper": 1, "often": [1, 2, 4, 5, 7], "recast": [1, 7], "obteain": 2, "grad": 2, "student": 2, "almost": [2, 3], "handheld": 2, "promin": 2, "enzym": [2, 4, 5, 8, 9], "kinet": [2, 5, 8, 9], "lineweav": 2, "burk": 2, "eadi": 2, "hofste": 2, "plot": [2, 5, 7, 8, 10, 11], "paramet": [2, 3, 6, 9], "non": [2, 6, 8, 9, 11], "semi": 2, "log": [2, 9], "inactiv": 2, "still": [2, 10], "whether": 2, "lowri": 2, "bradford": 2, "bca": 2, "mind": 2, "cours": 2, "scienc": 2, "encount": [2, 5, 9], "deeper": [2, 9], "relationship": [2, 9], "among": 2, "build": [2, 4, 5, 8], "numer": [2, 5, 8], "mathemat": 2, "scientif": [2, 5, 6, 7, 8, 10], "technic": 2, "engin": [2, 5, 9], "problem": [2, 5, 10], "guru99": 2, "algebra": 2, "linalg": 2, "optim": [2, 9], "random": 2, "integr": [2, 3], "earlier": [2, 4, 7, 8, 9], "expand": 2, "convent": 2, "coder": 2, "six": 2, "month": 2, "work": [2, 3, 4, 6, 7, 8, 10, 11], "correct": [2, 9], "model": [2, 6, 9], "charli": [2, 5, 8], "weiss": [2, 5, 8], "excel": [2, 5, 8], "onlin": [2, 5, 6, 8, 9], "textbook": [2, 3, 5, 8], "chemist": [2, 5, 8], "github": [2, 5, 8], "scicompforchemist": [2, 5, 8], "continu": 2, "your": [2, 3, 9, 10, 11], "straightforward": 2, "appli": [2, 8, 10], "_df": [2, 8], "remind": [2, 3, 7, 8], "enabl": [2, 3, 6, 9], "reserv": 2, "100": [2, 4, 7, 9], "l": [2, 5], "tube": 2, "read": [2, 5, 7, 8, 9], "485": 2, "621": 2, "799": 2, "010": 2, "refer": [2, 9], "doubl": [2, 10], "check": [2, 10], "sure": [2, 4, 7, 8, 9, 10], "everyth": [2, 7], "dtype": [2, 5, 8, 9], "float64": [2, 5, 8, 9], "accept": [2, 5, 9], "those": [2, 3, 4, 7, 8, 9], "present": [2, 6], "practic": [2, 7], "typic": [2, 9], "unknown": 2, "shown": [2, 3, 7, 10], "183": 2, "682": 2, "759": 2, "340": 2, "935": 2, "013": 2, "protconc": 2, "rearrang": 2, "frac": [2, 9], "unitless": 2, "neat": 2, "trick": 2, "gain": [2, 4], "samples_fil": 2, "samples_df": 2, "implement": [2, 3], "everi": [2, 4, 7], "row": [2, 5, 8], "index": [2, 5, 7, 8], "protein_conc": 2, "065213": 2, "655447": 2, "746525": 2, "433750": 2, "954703": 2, "046964": 2, "bracket": [2, 7, 9], "cover": [2, 7, 10, 11], "went": 2, "issu": 2, "therefor": [2, 4], "loc": [2, 5], "sequenti": 2, "condit": [2, 6, 7, 8], "nan": 2, "lowest": 2, "highest": 2, "preserv": 2, "rather": [2, 5, 8, 9], "hard": 2, "minimum": [2, 9], "maximum": [2, 6, 9], "programmat": 2, "min": [2, 8, 9], "max": [2, 9], "slightli": 2, "ground": 2, "water": [2, 6], "survei": 2, "well": [2, 3, 8, 9, 10], "texa": 2, "kindli": 2, "houghton": 2, "mifflin": 2, "between": [2, 4, 5], "ph": 2, "bicarbon": 2, "ppm": 2, "independ": [2, 3, 4, 9], "0030521595419827677": 2, "097595134597833": 2, "1152673937227531": 2, "04948248037131796": 2, "0014948066523110296": 2, "multi": 2, "water_fil": 2, "water_df": 2, "head": [2, 5, 8, 9], "bicarb": 2, "lab": 2, "incorpor": 3, "superimpos": 3, "control": [3, 4, 9], "render": 3, "featur": 3, "app": 3, "identifi": [3, 5, 6, 7, 8], "captur": 3, "viewer": 3, "nation": 3, "center": 3, "biotechnolog": 3, "fact": [3, 9], "henri": 3, "jakubowski": 3, "extens": 3, "offer": [3, 11], "libretext": 3, "seen": [3, 4], "Be": [3, 5, 8], "care": [3, 7], "modulenotfounderror": [3, 6], "No": [3, 6], "modul": [3, 4, 5, 6, 8, 9, 11], "represent": 3, "substitut": 3, "pdbid": 3, "xxxx": 3, "favorit": 3, "1a0j": 3, "scene": 3, "q": 3, "advantag": [3, 4], "over": [3, 4, 5, 6, 7], "quickli": 3, "requir": [3, 4], "definit": 3, "replac": 3, "anoth": [3, 4, 5, 7, 8], "8gch": 3, "menuicon": 3, "consid": [3, 6], "addit": [3, 4, 5], "strand": 3, "cylind": 3, "plate": 3, "1mbo": 3, "heme": [3, 6], "ball": 3, "stick": 3, "chemic": [3, 6], "cpl": 3, "bn": 3, "4hhb": [3, 6], "imagin": 3, "quit": 3, "consum": [3, 4], "modif": 3, "ribbon": 3, "color": 3, "secondari": 3, "background": 3, "reproduc": 3, "On": 3, "select": [3, 7, 9, 10], "dropdown": [3, 10], "menu": [3, 10], "choos": [3, 7, 9, 10], "share": [3, 4], "bring": 3, "dialog": 3, "click": [3, 7, 10], "copi": [3, 7], "past": [3, 4, 9], "mmdbafid": 3, "mmdb": 3, "mmdbid": 3, "bu": 3, "surfac": 3, "wirefram": 3, "yellow": 3, "factor": [3, 6], "mousechang": 3, "quaternion": 3, "_x": 3, "_y": 3, "_z": 3, "_w": 3, "form": [3, 5, 7, 11], "earli": 3, "id1": 3, "id2": 3, "pretti": 3, "cool": 3, "wouldn": 3, "nonlinear": [3, 5], "declar": [3, 7, 9], "def": [3, 9], "function_nam": [3, 4, 9], "independent_vari": [3, 9], "parameter1": [3, 9], "parameter2": [3, 9], "bodi": [3, 9], "value_to_return": [3, 9], "pass": [3, 5, 8, 9], "caus": [3, 9], "indent": [3, 4, 7, 9], "certain": [3, 6, 9], "doe": [3, 4, 5, 7, 9, 10, 11], "predesign": 3, "myview1": 3, "pdb_id": 3, "funtion": [4, 5], "pars": [4, 5, 6, 11], "util": 4, "wonder": 4, "search": [4, 6, 9, 10], "cut": [4, 6], "reason": [4, 7], "But": [4, 7], "had": 4, "1000": [4, 7, 9], "tediou": 4, "power": [4, 5, 6, 8], "bank": [4, 5], "download": [4, 10], "usual": [4, 5, 7], "relat": [4, 5], "reduc": [4, 5], "glob": 4, "input": [4, 5, 6, 9], "particular": [4, 5, 6, 7, 9], "library_nam": 4, "pattern": 4, "wildcard": 4, "charact": [4, 6, 7], "file_loc": 4, "littl": [4, 5], "confus": 4, "sinc": [4, 9], "later": [4, 6, 7], "readlin": 4, "res_lin": 4, "91": 4, "7": [4, 5, 7, 8, 9, 10], "85": 4, "9": [4, 5, 8, 9], "outer": 4, "inner": 4, "doesn": [4, 7], "show": [4, 6, 7], "came": 4, "basenam": 4, "first_fil": 4, "recal": 4, "file_nam": 4, "id": [4, 5], "split_filenam": 4, "molecule_nam": 4, "along": 4, "angstrom": 4, "colleagu": 4, "e": [4, 5, 9], "mail": 4, "advisor": 4, "action": [4, 7], "someon": [4, 7], "who": [4, 7, 8], "memori": 4, "slow": 4, "until": 4, "finish": [4, 7], "datafil": [4, 5, 8, 9], "come": [4, 10], "probabl": [4, 5, 9], "forgot": 4, "under": [4, 6, 8, 10], "initi": [4, 5, 7, 9], "automat": [4, 7], "beneath": 4, "examin": 4, "instruct": [4, 10, 11], "exist": [4, 5, 7, 8, 11], "overwrit": [4, 7], "wherea": 4, "convert": [4, 5, 6, 7], "front": 4, "either": 4, "done": [4, 6], "neater": 4, "tab": [4, 10], "special": [4, 5, 7, 8], "ran": 4, "newlin": 4, "without": 4, "smush": 4, "togeth": [4, 7], "sentenc": 4, "anyth": [4, 7], "materi": [4, 11], "long": [4, 5], "workshop": [4, 5, 6, 7, 8, 10], "goal": [4, 5], "commiss": 4, "class": 4, "ec": 4, "13": [4, 7, 8, 9], "familiar": [4, 5, 8, 9], "hierarch": [4, 6], "brenda": 4, "ec_class": 4, "55": [4, 5], "11": [4, 7, 8], "20": [4, 5, 7, 8, 9, 11], "break": [4, 9, 11], "overal": 4, "troubleshoot": 4, "statment": 4, "written": 4, "ec_lin": 4, "words1": 4, "words2": 4, "emploi": 4, "dimension": [5, 6, 8, 9], "built": [5, 7, 8], "abil": [5, 8], "item": [5, 6, 7, 8], "h": [5, 8], "he": [5, 8], "li": [5, 8], "b": [5, 8, 9], "etc": [5, 8], "analog": [5, 8], "z": [5, 8], "coordin": [5, 6, 8], "nd": [5, 8], "laboratori": [5, 8], "uniqu": [5, 8], "veloc": [5, 7, 9], "c": [5, 8], "free": [5, 8], "molssi": [5, 7, 8], "corei": [5, 8], "schafer": [5, 8], "youtub": [5, 8], "toward": 5, "transfer": 5, "vs": [5, 9], "proce": 5, "target": 5, "saw": [5, 8], "suffix": 5, "thrombin_fil": 5, "mention": 5, "googl": 5, "sheet": 5, "integ": [5, 7, 8], "four": 5, "3shc": 5, "human": 5, "thrombin": 5, "b01": 5, "phenylalanyl": 5, "chloropyridin": 5, "yl": 5, "methyl": 5, "prolinamid": 5, "3p17": 5, "43": 5, "99p": 5, "pyridin": 5, "ylmethyl": 5, "2znk": 5, "31u": 5, "leucyl": 5, "carbamimidoylbenzyl": 5, "carefulli": [5, 7], "arrang": 5, "seem": [5, 7], "strang": 5, "short": 5, "200": 5, "attach": 5, "affect": 5, "tast": 5, "io": 5, "parser": [5, 6], "filepath_or_buff": 5, "union": 5, "forwardref": 5, "pathlik": 5, "rawiobas": 5, "bufferediobas": 5, "textiobas": 5, "_io": 5, "textiowrapp": 5, "mmap": 5, "0x7f99809963e0": 5, "none": 5, "infer": 5, "index_col": 5, "usecol": 5, "squeez": 5, "fals": 5, "prefix": 5, "mangle_dupe_col": 5, "true": [5, 6, 8], "true_valu": 5, "false_valu": 5, "skipinitialspac": 5, "skiprow": 5, "skipfoot": 5, "nrow": 5, "na_valu": 5, "keep_default_na": 5, "na_filt": 5, "verbos": 5, "skip_blank_lin": 5, "parse_d": 5, "infer_datetime_format": 5, "keep_date_col": 5, "date_pars": 5, "dayfirst": 5, "cache_d": 5, "chunksiz": 5, "compress": 5, "thousand": [5, 9], "linetermin": 5, "quotechar": 5, "doublequot": 5, "escapechar": 5, "comment": [5, 7], "encod": 5, "dialect": 5, "error_bad_lin": 5, "warn_bad_lin": 5, "delim_whitespac": 5, "low_memori": 5, "memory_map": 5, "float_precis": 5, "storage_opt": 5, "dict": 5, "nonetyp": 5, "pai": [5, 7], "attent": [5, 7], "primari": 5, "thrombin_df": 5, "conveni": 5, "90": [5, 6, 9], "prolin": 5, "80": [5, 9], "3si3": 5, "b03": 5, "3si4": 5, "27": [5, 8, 9], "b04": 5, "methylpyridinium": 5, "met": 5, "3sv2": 5, "30": [5, 7, 11], "p05": 5, "1uvu": 5, "bovin": 5, "dch": 5, "diaminomethyl": 5, "naphthalen": 5, "propion": 5, "1uvt": 5, "50": [5, 7, 8, 9], "i48": 5, "ylamino": 5, "ethoxi": 5, "2c8z": 5, "c2a": 5, "chlorophenyl": 5, "methanamin": 5, "2c8y": 5, "c3m": 5, "2r": 5, "3s": 5, "hydroxi": 5, "phenylbutyl": 5, "nap": 5, "2c90": 5, "c1m": 5, "1h": 5, "tetrazol": 5, "iloc": 5, "tail": 5, "sort_valu": 5, "ascend": 5, "back": [5, 7], "unsort": 5, "retain": 5, "inplac": [5, 8], "substrat": [5, 7, 8, 9], "micromolar": [5, 7, 8], "km": [5, 7, 9], "vmax": [5, 7, 9], "fun": 5, "kinetics_fil": 5, "kinetics_df": 5, "substrate_conc": [5, 7], "tabular": [5, 6], "vaue": 5, "versatil": 6, "assist": 6, "biologist": 6, "simplifi": 6, "dna": 6, "databas": 6, "genbank": 6, "uniprot": 6, "pdbx": 6, "host": 6, "consist": 6, "excerpt": 6, "101": 6, "underscor": 6, "compos": 6, "categori": 6, "attribut": 6, "period": 6, "_citat": 6, "year": 6, "combin": 6, "token": 6, "kei": 6, "correspond": [6, 10], "_cell": 6, "entry_id": 6, "length_a": 6, "63": 6, "150": 6, "length_b": 6, "83": [6, 7], "590": 6, "length_c": 6, "53": 6, "800": 6, "angle_alpha": 6, "00": [6, 8, 9, 11], "angle_beta": 6, "34": [6, 7, 8, 9], "angle_gamma": 6, "z_pdb": 6, "mmcif2dict": 6, "dictionari": [6, 9], "queri": 6, "bio": 6, "pdb_info": 6, "larg": 6, "vari": 6, "brows": 6, "webpag": 6, "world": 6, "wide": 6, "_entiti": 6, "entiti": 6, "record": 6, "composit": 6, "sourc": [6, 9], "crystallograph": 6, "variou": 6, "subcategori": 6, "descript": [6, 7], "polym": 6, "solvent": 6, "sulfat": 6, "ion": 6, "aceton": 6, "atr": 6, "myoglobin": 6, "hydroxid": 6, "protoporphyrin": 6, "ix": 6, "fe": 6, "filter": 6, "clear": 6, "conditon": 6, "sampl": 6, "relev": 6, "_entity_src_gen": 6, "gene_src_common_nam": 6, "pdbx_gene_src_scientific_nam": 6, "_entity_poli": 6, "pdbx_seq_one_letter_cod": 6, "common_name_1mbn": 6, "scientific_name_1mbn": 6, "sequence_1mbn": 6, "iron": 6, "revers": 6, "bind": 6, "oxygen": 6, "o_2": 6, "carri": 6, "muscl": 6, "circl": [6, 9, 10], "residu": 6, "load": [6, 10], "mmcifpars": 6, "quiet": 6, "get_structur": 6, "smcra": 6, "chain": 6, "architectur": 6, "bioinformatician": 6, "effici": 6, "deal": 6, "get_atom": 6, "iron_atom": 6, "iron_coord": 6, "get_coord": 6, "neighborsearch": 6, "off": 6, "distanc": 6, "cutoff_dist": 6, "neighbor_search": 6, "thta": 6, "get_par": 6, "get_resnam": 6, "get_id": 6, "THe": 6, "hem": 6, "belong": 6, "iron_residu": 6, "93": 6, "histidin": 6, "distal": 6, "known": 6, "motif": 6, "character": 6, "stabil": 6, "rna": 6, "transcript": 6, "crucial": 6, "role": 6, "recognit": 6, "therebi": 6, "regul": 6, "gene": 6, "express": 6, "nucleocapsid": 6, "grip": 6, "viral": 6, "dure": [6, 10], "bud": 6, "viru": 6, "basic": 7, "languag": [7, 10], "sever": 7, "becom": 7, "ubiquit": 7, "interpret": 7, "instal": 7, "evalu": 7, "press": [7, 10], "shift": 7, "upper": [7, 10], "untitl": 7, "explain": 7, "purpos": [7, 10], "top": [7, 9], "screen": 7, "creation": 7, "subhead": 7, "readi": [7, 10], "variable_nam": 7, "variable_valu": 7, "micha": [7, 8], "menten": [7, 8], "nanomol": 7, "sec": [7, 8], "substrate_concentr": 7, "middl": 7, "rest": 7, "leav": 7, "temp": 7, "78260869565217": 7, "immut": 7, "noth": [7, 10], "happen": [7, 9], "60": 7, "2086": 7, "9565217391305": 7, "better": 7, "v_nmols_per_min": 7, "point": [7, 8, 9], "velocity_str": 7, "curli": [7, 9], "length": 7, "demonstr": [7, 9], "75": [7, 8], "s_length": 7, "nm": 7, "concentration_nm": 7, "100000": 7, "new_list": 7, "goe": 7, "short_list": 7, "slice1": 7, "slice2": 7, "exit": 7, "764705882352942": 7, "16": [7, 8, 9], "666666666666668": 7, "21": 7, "05263157894737": 7, "28": [7, 9], "571428571428573": 7, "40": [7, 9], "57": 7, "142857142857146": 7, "66": [7, 9], "66666666666667": 7, "76": 7, "92307692307692": 7, "33333333333333": 7, "86": 7, "95652173913044": 7, "somewher": 7, "new_th": 7, "v": [7, 9], "nameerror": 7, "17": 7, "blank": 7, "substate_conc": 7, "portion": 7, "linear_mm": 7, "subtrate_conc": 7, "v_linear": 7, "greater": 7, "less": 7, "v_at_or_below_km": 7, "compar": [7, 9], "nmber": 7, "conc_list": 7, "s_list": 7, "number_list": 7, "unintend": 7, "consequ": 7, "incorrect": 7, "similarli": 7, "undefin": 7, "clearli": [7, 9], "least": [8, 9], "rate": 8, "raw": 8, "\u03b4a": 8, "405": 8, "alkalin": 8, "phosphatas": 8, "reorgan": 8, "mm": [8, 9], "nitrophenol": 8, "phosphat": 8, "presenc": 8, "confirm": 8, "ap_kin_df": 8, "127118": 8, "121434": 8, "123059": 8, "103351": 8, "088046": 8, "062613": 8, "051681": 8, "034661": 8, "019578": 8, "020353": 8, "005635": 8, "269802": 8, "257587": 8, "239086": 8, "210920": 8, "177801": 8, "122747": 8, "104366": 8, "068643": 8, "040318": 8, "011162": 8, "373572": 8, "364301": 8, "369177": 8, "313216": 8, "246186": 8, "193419": 8, "147517": 8, "099906": 8, "059896": 8, "056988": 8, "016580": 8, "518850": 8, "500455": 8, "468796": 8, "400747": 8, "352183": 8, "257892": 8, "194682": 8, "134567": 8, "073658": 8, "075985": 8, "022757": 8, "616135": 8, "613302": 8, "556695": 8, "500934": 8, "444503": 8, "309966": 8, "258405": 8, "173306": 8, "099827": 8, "100796": 8, "027092": 8, "far": 8, "fix": 8, "set_index": 8, "perman": 8, "got": 8, "expect": [8, 9], "ensur": 8, "extinct": 8, "coeffici": 8, "buffer": 8, "cm": 8, "pyplot": [8, 9], "matplotlib": [8, 9], "marker": 8, "o": [8, 9], "mm_df": 8, "pnpp": [8, 9], "scatter": 8, "frame": 8, "placehold": 8, "ignor": 8, "cycl": 8, "5140907641142858": 8, "5031401632390977": 8, "4704346427639096": 8, "4170212341052633": 8, "34244478125714295": 8, "24625953559097755": 8, "20284295232781954": 8, "1364430576421053": 8, "07644213958496243": 8, "07806979615939849": 8, "022319351245112782": 8, "514091": [8, 9], "503140": [8, 9], "470435": [8, 9], "417021": [8, 9], "342445": [8, 9], "246260": [8, 9], "202843": [8, 9], "136443": [8, 9], "076442": [8, 9], "078070": [8, 9], "022319": [8, 9], "015": 8, "m": [8, 9], "272718": [8, 9], "33": [8, 9], "542678": [8, 9], "31": [8, 9], "362310": [8, 9], "801416": [8, 9], "22": [8, 9], "829652": [8, 9], "417302": [8, 9], "522863": [8, 9], "096204": [8, 9], "096143": [8, 9], "204653": [8, 9], "487957": [8, 9], "outputfil": 8, "to_csv": 8, "chymotrypsin": [8, 9], "principl": 8, "18": 8, "320": 8, "layout": 8, "delet": 8, "seven": 8, "chymo_rates_df": 8, "chymo_mm_df": 8, "pnpa": [8, 9], "01832": 8, "robust": 9, "prepar": [9, 11], "accur": 9, "attract": 9, "descriptor": 9, "suffici": 9, "paramat": 9, "ideal": 9, "excit": 9, "catalyz": 9, "reaction": 9, "simplest": 9, "k": 9, "_m": 9, "constant": 9, "half": 9, "maxim": 9, "_i": 9, "v_i": 9, "v_": 9, "k_m": 9, "subconc": 9, "vi": 9, "skip": 9, "rates_df": 9, "inspect": 9, "70": 9, "0x7f0b25c37490": 9, "commerci": 9, "softwar": 9, "packag": [9, 10], "hundr": 9, "million": 9, "smaller": 9, "understand": 9, "modular": 9, "reus": 9, "238095": 9, "909091": 9, "87": 9, "500000": 9, "000000": 9, "666667": 9, "41": 9, "176471": 9, "571429": 9, "090909": 9, "761905": 9, "callabl": 9, "receiv": 9, "mistak": 9, "attempt": 9, "stack": 9, "overflow": 9, "geeksforgeek": 9, "hit": 9, "popt": 9, "pcov": 9, "signfic": 9, "2d": 9, "matrix": 9, "covari": 9, "arrai": 9, "document": 9, "distinguish": 9, "associ": 9, "predict": 9, "discuss": 9, "weight": 9, "versu": 9, "rel": 9, "migrat": 9, "sd": 9, "gel": 9, "With": 9, "deviat": 9, "sqrt": 9, "diag": 9, "stdev": 9, "36": 9, "65734834390893": 9, "6749595215280199": 9, "1926322406324839": 9, "08042268476177239": 9, "unlik": 9, "truncat": 9, "round": 9, "2f": 9, "direct": 9, "67": 9, "3f": 9, "At": 9, "stage": 9, "fit_i": 9, "0x7faff0484370": 9, "disjoint": 9, "smoother": 9, "linspac": 9, "bo": 9, "blue": 9, "smooth_x": 9, "smooth_i": 9, "legend": 9, "0x7fb0005728e0": 9, "symbol": 9, "triangl": 9, "dig": 9, "adjust": 9, "c_rates_df": 9, "c_ydata": 9, "c_xdata": 9, "perr": 9, "a_dict": 9, "bradi": 9, "evan": 9, "manual": 9, "teach": 10, "abl": 10, "popular": 10, "difficult": 10, "recommend": 10, "navig": 10, "appropri": 10, "icon": 10, "finder": 10, "spotlight": 10, "green": 10, "button": 10, "side": 10, "environ": 10, "channel": 10, "procedur": 10, "conda": 10, "forg": 10, "keyboard": 10, "updat": 10, "turn": 10, "drop": 10, "down": 10, "wait": 10, "bar": 10, "checkbox": 10, "browser": 10, "unzip": 10, "launch": 10, "jupyterlab": 10, "especi": 10, "ever": 10, "panic": 10, "internet": 10, "hour": 11, "live": 11, "reinforc": 11, "session": 11, "intent": 11, "feedback": 11, "answer": 11, "stop": 11, "dai": 11, "pm": 11, "overview": 11, "multipl": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"creat": [0, 2, 3, 8, 9], "plot": [0, 9], "jupyt": [0, 7, 10], "notebook": [0, 7, 10], "overview": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "prepar": 0, "us": [0, 2, 5, 6, 8, 9], "matplotlib": 0, "pyplot": 0, "check": [0, 1, 4, 5, 7, 8], "your": [0, 1, 4, 5, 7, 8], "understand": [0, 1, 4, 5, 7, 8], "solut": [0, 1, 2, 4, 5, 7, 8, 9], "scatter": 0, "seaborn": 0, "exercis": [0, 2, 5, 7, 9], "kei": [0, 1, 2, 4, 5], "point": [0, 1, 2, 4, 5], "file": [1, 4, 6], "pars": 1, "work": [1, 5], "path": 1, "os": 1, "modul": [1, 2], "absolut": 1, "rel": 1, "read": [1, 4, 6], "readlin": 1, "function": [1, 3, 9], "behavior": 1, "answer": 1, "search": 1, "pattern": 1, "exeris": 1, "hint": [1, 2, 4, 8], "particular": 1, "line": 1, "number": 1, "A": [1, 4, 7], "final": [1, 4], "note": [1, 4, 7], "about": [1, 4, 7], "regular": 1, "express": 1, "linear": 2, "regress": [2, 8, 9], "why": [2, 5, 8], "librari": [2, 3, 4, 5], "you": 2, "need": 2, "stage": 2, "thi": 2, "import": [2, 4, 5, 8], "data": [2, 5, 7, 8, 9], "panda": [2, 5, 8], "scipi": 2, "solv": 2, "protein": 2, "concentr": 2, "sampl": 2, "csv": 2, "datafram": [2, 5, 8], "equat": [2, 9], "add": 2, "column": 2, "elimin": 2, "valu": 2, "outsid": 2, "calibr": 2, "curv": 2, "option": 2, "molecular": 3, "visual": 3, "icn3d": 3, "load": 3, "view": 3, "pdb": 3, "structur": 3, "appli": 3, "power": 3, "python": [3, 5, 10], "ad": 3, "command": 3, "icn3dpi": 3, "pull": 3, "collect": 3, "from": [3, 9], "an": [3, 7], "web": 3, "page": 3, "teas": 3, "apart": 3, "set": [3, 7, 10], "id": 3, "1et": 3, "base": 3, "prefer": 3, "gener": 3, "process": 4, "multipl": [4, 7], "write": 4, "nest": 4, "loop": [4, 7], "print": [4, 9], "string": [4, 9], "format": 4, "project": 4, "what": [5, 8], "do": [5, 8], "we": [5, 8], "1d": [5, 8], "arrai": [5, 8], "2d": [5, 8], "3d": [5, 6, 8], "locat": 5, "find": 5, "inform": 5, "sort": 5, "analyz": 6, "mmcif": 6, "biopython": 6, "measur": 6, "properti": 6, "ligand": 6, "neighbor": 6, "challeng": 6, "repeat": [6, 7], "analysi": 6, "zinc": 6, "finger": 6, "introduct": 7, "get": 7, "start": [7, 10], "up": [7, 10], "assign": 7, "variabl": 7, "type": 7, "onc": 7, "list": 7, "slice": 7, "oper": 7, "mani": 7, "time": 7, "make": 7, "choic": 7, "logic": 7, "statement": 7, "nonlinear": [8, 9], "part": [8, 9], "1": 8, "datatyp": 8, "calcul": 8, "initi": 8, "veloc": 8, "inspect": 8, "slope": 8, "2": 9, "fit": 9, "The": 9, "micha": 9, "menten": 9, "curve_fit": 9, "extract": 9, "output": 9, "review": 9, "f": 9, "smooth": 9, "take": 9, "home": 9, "common": 9, "error": 9, "instal": 10, "through": 10, "anaconda": 10, "nglview": 10, "obtain": 10, "lesson": 10, "materi": 10, "workshop": 11, "schedul": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})