from telegram import Update, WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# O'ZINGIZNING BOT TOKENINGIZNI SHU YERGA QO'YING
TOKEN = "8767067142:AAGCiNgLT0o8ItLfK03aiBZYGwn4-QgMpC8" 

# DIQQAT: Oxiridagi ?v=777 yozuvi Telegramga "Bu yangi fayl, eskisini o'chirib yangisini yukla!" degan buyruqni beradi.
WEB_APP_URL = "https://kompiyurt.github.io/Falsafa-/?v=777" 

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Mini App tugmasini yaratish
    keyboard = [
        [InlineKeyboardButton("🎓 Testni boshlash (Mini App)", web_app=WebAppInfo(url=WEB_APP_URL))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    # Botning xabari
    await update.message.reply_text(
        "Falsafa fanidan 500 ta savolli zamonaviy testga xush kelibsiz!\n\n"
        "Testni ishlash va sertifikat olish uchun pastdagi tugmani bosing 👇", 
        reply_markup=reply_markup
    )

def main():
    app = Application.builder().token(TOKEN).build()
    
    # /start buyrug'i
    app.add_handler(CommandHandler("start", start))
    
    print("Bot muvaffaqiyatli ishga tushdi...")
    app.run_polling()

if __name__ == "__main__":
    main()
