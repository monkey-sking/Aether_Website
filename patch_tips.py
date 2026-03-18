import json
import os

tips_to_add = {
    "de": [
        "Tipp: Die aktiven Modusregeln überschreiben die globalen Einstellungen.",
        "Tipp: Verwenden Sie HUD-Schnelltasten, um aktuelle Fenster zu durchsuchen oder Desktops zu wechseln.",
        "Tipp: Legen Sie eigenständige Auto-Close-Regeln für Browser-Tabs oder Finder-Fenster fest.",
        "Tipp: Das HUD unterstützt Spaces-Gruppierungen und folgt der Maus.",
        "Tipp: Aktivieren Sie die erweiterte Prozesserfassung, um Browserprofile zu identifizieren."
    ],
    "es": [
        "Sugerencia: Las reglas del modo activo anulan la configuración global.",
        "Sugerencia: Use los atajos de HUD para buscar en las ventanas actuales o cambiar de escritorio.",
        "Sugerencia: Establezca reglas de cierre automático independientes para pestañas del navegador o ventanas del Finder.",
        "Sugerencia: El HUD admite la agrupación de Spaces y sigue el ratón.",
        "Sugerencia: Habilite la detección detallada de procesos para identificar perfiles del navegador."
    ],
    "fr": [
        "Astuce : Les règles du mode actif remplacent les paramètres globaux.",
        "Astuce : Utilisez les raccourcis du HUD pour rechercher dans les fenêtres actuelles ou changer de bureau.",
        "Astuce : Définissez des règles de fermeture automatique autonomes pour les onglets du navigateur ou les fenêtres du Finder.",
        "Astuce : Le HUD prend en charge le regroupement des espaces et suit votre souris.",
        "Astuce : Activez la détection détaillée des processus pour identifier les profils de navigateur."
    ],
    "it": [
        "Suggerimento: Le regole della modalità attiva ignorano le impostazioni globali.",
        "Suggerimento: Usa le scorciatoie dell'HUD per cercare nelle finestre correnti o cambiare desktop.",
        "Suggerimento: Imposta regole di chiusura automatica indipendenti per le schede del browser o le finestre del Finder.",
        "Suggerimento: L'HUD supporta il raggruppamento di Spaces e segue il mouse.",
        "Suggerimento: Abilita il rilevamento dettagliato dei processi per identificare i profili del browser."
    ],
    "ja": [
        "ヒント: アクティブモード固有のルールはグローバル設定を上書きします。",
        "ヒント: HUDショートカットを使用して現在のウィンドウを検索したり、デスクトップを切り替えたりできます。",
        "ヒント: ブラウザのタブやFinderウィンドウに個別の自動終了ルールを設定できます。",
        "ヒント: HUDはSpacesのグループ化をサポートし、マウスに追従します。",
        "ヒント: 高度なプロセス検出を有効にして、ブラウザのプロファイルを識別します。"
    ],
    "ko": [
        "팁: 활성 모드 규칙이 전역 설정보다 우선합니다.",
        "팁: HUD 단축키를 사용하여 현재 창을 검색하거나 데스크톱을 전환하세요.",
        "팁: 브라우저 탭이나 Finder 창에 대해 독립적인 자동 종료 규칙을 설정하세요.",
        "팁: HUD는 Spaces 그룹화를 지원하며 마우스를 따라갑니다.",
        "팁: 고급 프로세스 감지를 활성화하여 브라우저 프로필을 식별하세요."
    ],
    "pt": [
        "Dica: As regras do modo ativo substituem as configurações globais.",
        "Dica: Use os atalhos do HUD para pesquisar as janelas atuais ou alternar áreas de trabalho.",
        "Dica: Defina regras de fechamento automático autônomas para guias do navegador ou janelas do Finder.",
        "Dica: O HUD suporta agrupamento do Spaces e segue o mouse.",
        "Dica: Ative a Detecção Detalhada de Processos para identificar perfis de navegador."
    ],
    "ru": [
        "Подсказка: Правила активного режима имеют приоритет над глобальными настройками.",
        "Подсказка: Используйте горячие клавиши HUD для поиска по текущим окнам или переключения рабочих столов.",
        "Подсказка: Установите отдельные правила автоматического закрытия для вкладок браузера или окон Finder.",
        "Подсказка: HUD поддерживает группировку Spaces и следует за курсором мыши.",
        "Подсказка: Включите детальное обнаружение процессов для идентификации профилей браузера."
    ]
}

base_dir = "public/aether"

for lang, new_tips in tips_to_add.items():
    file_path = os.path.join(base_dir, f"Tips_{lang}.json")
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        
        # Check if we already added them to avoid duplicates if run twice
        if new_tips[-1] not in data:
            data.extend(new_tips)
            
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
                print(f"Updated {file_path}")

# Also update the master Tips.json file if necessary (it might be a combined or different format, let's check it first, but script can just dump for now, we'll see)
