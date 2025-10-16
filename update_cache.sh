#!/bin/bash

# Script para atualizar cache busting automaticamente
TIMESTAMP=$(date +%s)

echo "🔄 Atualizando cache busting com timestamp: $TIMESTAMP"

# Atualizar CSS
sed -i "s/styles\.css?v=[0-9]*/styles.css?v=$TIMESTAMP/g" index.html

# Atualizar JS
sed -i "s/script\.js?v=[0-9]*/script.js?v=$TIMESTAMP/g" index.html

echo "✅ Cache busting atualizado!"
echo "📝 Fazendo commit..."

# Git add, commit e push
git add .
git commit -m "🔄 Cache busting update - v$TIMESTAMP"
git push origin main

echo "🚀 Deploy enviado para GitHub Pages!"
echo "⏰ Aguarde 1-2 minutos para a atualização"