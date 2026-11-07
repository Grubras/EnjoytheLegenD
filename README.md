<div align="center">

# EnjoytheLegenD · AI Command Center

**Uma central pessoal para agentes, skills, conhecimento e repositórios.**

[![Painel](https://img.shields.io/badge/ABRIR-PAINEL-35d6f0?style=for-the-badge&logo=googlechrome&logoColor=0b1026)](https://enjoythelegend.github.io/)
[![Repositórios](https://img.shields.io/badge/REPOSIT%C3%93RIOS-f0326e?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EnjoytheLegenD?tab=repositories)
[![OpenCode Go](https://img.shields.io/badge/OPENCODE_GO-8b5cf6?style=for-the-badge&logo=terminal&logoColor=white)](https://opencode.ai/go)

</div>

---

## O que é

Painel estático que consolida o estado da minha operação de IA: agentes, skills,
biblioteca de conhecimento, repositórios, modelos e consumo de tokens.

- **Painel:** https://enjoythelegend.github.io/
- **Cérebro (privado):** [opencode-brain](https://github.com/EnjoytheLegenD/opencode-brain)
- **Plataforma (privado):** [ai-command-center](https://github.com/EnjoytheLegenD/ai-command-center)

## Como funciona

```
cérebro local  ──build──►  data/manifest.json  ──GitHub Pages──►  painel
```

Nenhum token é consumido para abrir o painel: ele lê um JSON gerado.
Nenhuma credencial existe aqui — o repositório é público e só recebe dados
agregados (nomes, contagens, status).

## Áreas do painel

| Área | Mostra |
|---|---|
| Visão geral | KPIs, distribuição do catálogo, atividade e consumo |
| Agentes | papel, modo e modelo de cada agente |
| Skills | habilidades disponíveis e status |
| Conhecimentos | biblioteca com domínio e origem |
| Repositórios | projetos versionados |
| Modelos | catálogo do OpenCode Go |
| Navegador | barra de endereço e atalhos |

## Atualizar

```powershell
node build-manifest.mjs
git add -A; git commit -m "manifest"; git push
```

O Pages republica sozinho em segundos.

## Limites declarados

- O painel **não** hospeda o motor de IA; ele abre o OpenCode local.
- Não há login nem dado privado aqui.
- Números refletem a última geração do manifesto, não tempo real.
