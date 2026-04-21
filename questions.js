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
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Agar qator raqam bilan boshlansa (savol bo'lsa)
        if re.match(r'^\d+', line):
            q_text = re.sub(r'^\d+\s*', '', line).strip()
            opts = []
            answer = ""

            # Keyingi 4 ta qatorni variantlar sifatida o'qish
            for j in range(1, 5):
                if i + j < len(lines):
                    opt_line = lines[i + j]
                    # Boshidagi A, B, C, D harflarini olib tashlash
                    opt_text = re.sub(r'^[A-D]\s*', '', opt_line).strip()
                    
                    if "#" in opt_text:
                        opt_text = opt_text.replace("#", "").strip()
                        answer = opt_text
                    
                    opts.append(opt_text)

            # Agar 4 ta variant to'liq topilsa, ro'yxatga qo'shamiz
            if len(opts) == 4:
                questions.append({
                    "q": q_text,
                    "options": opts,
                    "answer": answer
                })
            i += 5
        else:
            i += 1

    # Barcha savollarni 10 ta bo'limga bo'lish
    sections = []
    size = 50 
    for idx in range(10):
        section_q = questions[idx*size : (idx+1)*size]
        if section_q:
            sections.append(section_q)

    # Natijani questions.js fayliga yozish
    with open("questions.js", "w", encoding="utf-8") as f:
        f.write("const allQuestions = ")
        json.dump(sections, f, ensure_ascii=False, indent=4)
        f.write(";\n")
        
    print(f"Ajoyib! Jami {len(questions)} ta savol questions.js fayliga muvaffaqiyatli saqlandi!")

if __name__ == "__main__":
    convert_to_js()
      
