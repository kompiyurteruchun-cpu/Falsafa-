import json
import re

def convert_to_js():
    # falsafa.txt faylini o'qish
    with open("falsafa.txt", "r", encoding="utf-8") as f:
        content = f.read()

    # Matndagi kabi ortiqcha belgilarni tozalash
    content = re.sub(r'\', '', content)
    lines = [line.strip() for line in content.split('\n') if line.strip()]

    questions = []
    current_q = None

    for line in lines:
        # Agar qator raqam bilan boshlansa (Savol bo'lsa)
        if re.match(r'^\d+', line):
            if current_q and len(current_q['options']) > 0:
                questions.append(current_q)
            
            # Boshidagi raqamni olib tashlash
            q_text = re.sub(r'^\d+\s*', '', line).strip()
            current_q = {"q": q_text, "options": [], "answer": ""}
        
        # Agar qator A, B, C, D bilan boshlansa (Variant bo'lsa)
        elif current_q and re.match(r'^[A-D]\s*', line):
            opt = re.sub(r'^[A-D]\s*', '', line).strip()
            
            # # belgisi to'g'ri javobni bildiradi
            if '#' in opt:
                opt = opt.replace('#', '').strip()
                current_q['answer'] = opt
            
            current_q['options'].append(opt)

    # Oxirgi savolni ham ro'yxatga qo'shish
    if current_q and len(current_q['options']) > 0:
        questions.append(current_q)

    # Barcha savollarni 10 ta bo'limga bo'lish
    sections = []
    size = 50 # Har bir bo'limda 50 tadan
    for idx in range(10):
        chunk = questions[idx*size : (idx+1)*size]
        if chunk:
            sections.append(chunk)

    # Natijani questions.js fayliga yozish
    with open("questions.js", "w", encoding="utf-8") as f:
        f.write("const allQuestions = ")
        json.dump(sections, f, ensure_ascii=False, indent=4)
        f.write(";\n")
        
    print(f"Tabriklayman! Jami {len(questions)} ta savol questions.js fayliga xatosiz saqlandi!")

if __name__ == "__main__":
    convert_to_js()
