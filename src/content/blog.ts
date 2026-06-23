export interface BlogSubsection {
  heading: string;
  body: string;
  internalLink?: { anchor: string; url: string };
}

export interface BlogSection {
  heading: string;
  body?: string;
  list?: string[];
  subsections?: BlogSubsection[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  coverImage: string;
  coverImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  content: {
    intro: string;
    sections: BlogSection[];
    conclusion: string;
    medicalDisclaimer: string;
    callToAction: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post_001',
    slug: 'cuando-necesito-una-corona-dental',
    title: '¿Cuándo necesitas una corona dental?',
    subtitle: 'Señales, tipos y lo que debes saber antes de tu consulta',
    excerpt:
      'Tu odontólogo mencionó la palabra "corona" y ahora tienes mil preguntas. Aprende a identificar las señales de que la necesitas y conoce los distintos tipos disponibles.',
    date: '2026-03-14',
    readTime: 5,
    category: 'Coronas Dentales',
    coverImage: '/home.webp',
    coverImageAlt: 'Guía sobre coronas dentales — Dra. Sandra Rodríguez, Bogotá',
    metaTitle: '¿Cuándo necesitas una corona dental? Señales y tipos | Sandra Rodríguez Dental',
    metaDescription:
      'Aprende a reconocer las señales de que tu diente necesita una corona y conoce las diferencias entre los tipos disponibles. Guía educativa de la Dra. Sandra Rodríguez, prostodoncista.',
    focusKeyword: 'cuándo necesito una corona dental',
    content: {
      intro:
        'Tu odontólogo te mencionó la palabra "corona" y ahora tienes mil preguntas. ¿Es realmente necesaria? ¿Duele? ¿Cuánto tiempo dura? ¿Hay opciones?\n\nEs completamente normal que quieras entender bien este tratamiento antes de tomar una decisión. En este artículo te explicamos para qué sirve una corona dental, cuáles son las señales de que la necesitas y qué deberías saber para llegar preparado a tu consulta con el especialista.',
      sections: [
        {
          heading: '¿Para qué sirve una corona dental?',
          body: 'Una corona dental es una restauración que cubre completamente un diente dañado, como si fuera una funda protectora. Su función es doble: restaurar la forma y resistencia del diente, y devolverle una apariencia natural.\n\nA diferencia de un relleno (obturación), que repara solo una parte del diente, la corona envuelve toda la superficie visible por encima de la encía. Se indica cuando el daño es tan extenso que un relleno no sería suficientemente sólido o duradero.',
        },
        {
          heading: 'Señales de que tu diente podría necesitar una corona',
          body: 'No siempre es fácil saber si necesitas este tratamiento sin una evaluación clínica. Pero hay situaciones frecuentes en las que tu especialista probablemente lo va a recomendar:',
          list: [
            'Tu diente tiene una fractura o grieta profunda que no puede restaurarse con un relleno',
            'Acabas de terminar un tratamiento de conductos (endodoncia) — el diente queda más frágil y necesita protección',
            'Tienes un diente muy desgastado por bruxismo (el hábito de apretar o rechinar los dientes)',
            'Una caries avanzada destruyó gran parte de la estructura del diente',
            'Quieres mejorar la apariencia de un diente muy manchado, fracturado o con forma irregular',
            'Tienes un implante dental y ya es momento de poner la parte visible (la corona)',
            'Necesitas un puente dental y los dientes de apoyo requieren coronas',
          ],
        },
        {
          heading: '¿Cuántos tipos de coronas dentales existen?',
          body: 'El tipo de corona más adecuado para ti depende de dónde está el diente, qué tan visible es cuando sonríes y cuánta fuerza soporta al masticar. Tu especialista te orientará, pero estos son los materiales más comunes:',
          subsections: [
            {
              heading: 'Metal-porcelana',
              body: 'La opción más usada en Colombia por décadas. Tiene un núcleo de metal recubierto por porcelana del color del diente. Es muy resistente y funciona bien especialmente en los dientes traseros.\n\nCon el tiempo, si la encía retrocede un poco, puede aparecer una línea oscura en el borde. Para más información sobre este tipo, puedes ver nuestra página de coronas de metal-porcelana.',
              internalLink: {
                anchor: 'coronas de metal-porcelana',
                url: '/tratamientos/protesis/coronas/porcelana',
              },
            },
            {
              heading: 'Libre de metal (cerámica o zirconio)',
              body: 'Hechas completamente de cerámica o zirconio, estas coronas no tienen ningún componente metálico. Transmiten la luz como un diente real y son casi indistinguibles visualmente. Son la elección habitual para los dientes frontales donde la estética importa más.\n\nSi quieres conocer las opciones sin metal disponibles en nuestra clínica, visita nuestra página de coronas libres de metal.',
              internalLink: {
                anchor: 'coronas libres de metal',
                url: '/tratamientos/protesis/coronas/nometal',
              },
            },
            {
              heading: 'Zirconio de alta resistencia',
              body: 'El zirconio combina lo mejor de los dos mundos: la estética de la cerámica con una dureza muy similar a la del metal. Es una opción excelente para dientes posteriores en pacientes que prefieren evitar completamente el metal.',
            },
          ],
        },
        {
          heading: '¿Cuánto tiempo dura una corona dental?',
          body: 'Con un buen cuidado, una corona bien fabricada puede durar entre 10 y 15 años, y muchas superan ese tiempo. Lo que más influye en su longevidad es:',
          list: [
            'La higiene oral diaria (cepillado + hilo dental)',
            'Evitar hábitos que generan mucha presión, como rechinar los dientes o morder objetos duros',
            'Las revisiones periódicas con tu especialista',
            'El material de la corona y la precisión del ajuste inicial',
          ],
        },
        {
          heading: '¿Qué diferencia hay entre una corona y un puente dental?',
          body: 'Es una pregunta frecuente. La diferencia es sencilla:\n\nUna corona protege y restaura un diente que todavía está en tu boca (aunque dañado). Un puente dental reemplaza un diente que ya no existe. Para sostenerse, usa como "pilares" las coronas colocadas sobre los dientes vecinos al espacio vacío.\n\nSi perdiste un diente, tu especialista evaluará si un puente o un implante dental es la mejor solución para tu caso específico.',
        },
        {
          heading: '¿Duele ponerse una corona dental?',
          body: 'El procedimiento se hace con anestesia local, así que durante la preparación del diente no deberías sentir dolor. Lo que sí es normal en los días siguientes es algo de sensibilidad, especialmente al frío o al calor. Esta molestia suele desaparecer sola en pocos días.\n\nSi el dolor es intenso o persiste más de una semana, es importante que lo consultes con tu especialista cuanto antes.',
        },
        {
          heading: 'Cómo cuidar una corona dental para que dure más',
          list: [
            'Cepilla con suavidad la zona donde la corona se une a la encía — es el punto más vulnerable',
            'Pasa hilo dental todos los días, deslizándolo cuidadosamente por el borde de la corona',
            'Evita morder objetos muy duros: hielo, lapiceros, uñas',
            'Si tienes bruxismo (rechinas los dientes por la noche), consulta sobre una placa de protección',
            'No saltees las citas de revisión — un ajuste pequeño a tiempo evita problemas mayores',
          ],
        },
      ],
      conclusion:
        'Entender para qué sirve una corona y cuándo se necesita te ayuda a llegar a tu consulta con las preguntas correctas y a tomar una decisión informada junto con tu especialista. Cada caso es diferente: el material, el tipo y el momento adecuado solo pueden determinarse con una evaluación personalizada.\n\nSi tienes dudas sobre tu situación específica, lo más importante es consultar con un prostodoncista que pueda revisar tu caso de manera integral.',
      medicalDisclaimer:
        'Este artículo tiene fines educativos e informativos. No reemplaza la evaluación clínica de un profesional de la salud. Cada caso requiere diagnóstico personalizado.',
      callToAction:
        '¿Crees que podrías necesitar una corona o tienes dudas sobre tus opciones? Agenda una consulta con la Dra. Sandra Rodríguez, especialista en Prostodoncia y Rehabilitación Oral.',
    },
  },
  {
    id: 'post_002',
    slug: 'que-es-la-protesis-dental-fija',
    title: '¿Qué es la prótesis dental fija y cuándo necesitas una?',
    subtitle: 'Diferencias con la removible, tipos y lo que debes saber',
    excerpt:
      '¿Perdiste un diente o tienes uno muy dañado y no sabes qué opciones tienes? La prótesis fija es una de las soluciones más duraderas. Te explicamos cómo funciona y cuándo se indica.',
    date: '2026-03-21',
    readTime: 6,
    category: 'Prótesis Dental',
    coverImage: '/hippy.webp',
    coverImageAlt: 'Prótesis dental fija — Dra. Sandra Rodríguez, Bogotá',
    metaTitle:
      '¿Qué es la prótesis dental fija? Tipos y cuándo necesitarla | Sandra Rodríguez Dental',
    metaDescription:
      '¿Perdiste un diente o tienes uno muy dañado? Conoce qué es la prótesis fija, sus tipos (coronas, puentes, sobre implantes) y cuándo es la mejor opción para ti.',
    focusKeyword: 'qué es la prótesis dental fija',
    content: {
      intro:
        'Perder un diente o tener varios muy dañados es una situación que afecta no solo la estética, sino también la manera en que masticas, hablas y te sientes contigo mismo.\n\nLa prótesis dental fija es una de las soluciones más utilizadas para recuperar esa función y esa apariencia. A diferencia de las prótesis removibles, estas no se sacan. En este artículo te explicamos en qué consisten, qué tipos existen y cuándo son la opción más adecuada para ti.',
      sections: [
        {
          heading: '¿Qué es una prótesis dental fija?',
          body: 'Una prótesis dental fija es una restauración que se cementa de forma permanente sobre los dientes naturales o sobre implantes dentales. Al estar fija, el paciente no puede ni necesita retirarla: se siente y funciona como si fueran dientes propios.\n\nEstá fabricada con materiales de alta resistencia — cerámica, zirconio, metal-porcelana — diseñados para soportar las fuerzas de la masticación durante muchos años.',
        },
        {
          heading: '¿Cuándo se recomienda una prótesis fija?',
          body: 'Tu especialista puede recomendarte una prótesis fija en estas situaciones:',
          list: [
            'Has perdido uno o más dientes y los dientes vecinos están en buen estado (para un puente)',
            'Tienes implantes dentales y necesitas la parte visible que los completa',
            'Un diente está tan dañado por caries, fractura o bruxismo que no puede restaurarse con un relleno',
            'Quieres una solución permanente que no requiera retiro diario',
            'Buscas recuperar la función masticatoria y la estética de manera duradera',
          ],
        },
        {
          heading: 'Tipos de prótesis dental fija',
          body: 'No todas las prótesis fijas son iguales. Dependiendo de tu situación, el especialista evaluará cuál es la más adecuada:',
          subsections: [
            {
              heading: 'Coronas dentales',
              body: 'Cubren un diente dañado de forma completa. Son la opción cuando el diente todavía existe pero necesita protección total. Pueden ser de metal-porcelana, cerámica pura o zirconio dependiendo de la ubicación y las necesidades estéticas del paciente.',
              internalLink: {
                anchor: 'tipos de coronas dentales',
                url: '/tratamientos/protesis/coronas/porcelana',
              },
            },
            {
              heading: 'Puente dental fijo',
              body: 'El puente reemplaza uno o más dientes ausentes usando como apoyo las coronas colocadas sobre los dientes vecinos. Es una solución cementada de forma permanente que no requiere implantes.\n\nRequiere que los dientes de los lados del espacio estén en buen estado para servir como pilares.',
            },
            {
              heading: 'Prótesis fija sobre implantes',
              body: 'Cuando no hay dientes vecinos sanos o cuando se han perdido muchos dientes, los implantes dentales actúan como raíces artificiales que sostienen la prótesis. Es la opción más próxima a los dientes naturales en términos de función y comodidad.',
              internalLink: {
                anchor: 'prótesis sobre implantes',
                url: '/tratamientos/protesis/sobreimplantes',
              },
            },
          ],
        },
        {
          heading: '¿Qué diferencia hay entre prótesis fija y removible?',
          body: 'La diferencia principal es que la prótesis removible puede sacarse (y debe limpiarse fuera de la boca), mientras que la fija es permanente.\n\nLa prótesis removible suele indicarse cuando no hay suficientes dientes de apoyo para una opción fija, o cuando el paciente no puede someterse a procedimientos más complejos. La fija ofrece mayor estabilidad, mayor comodidad y, en general, una sensación más parecida a los dientes naturales.',
        },
        {
          heading: '¿Cuánto dura una prótesis dental fija?',
          body: 'Con un mantenimiento adecuado, una prótesis fija bien fabricada puede durar más de 15 años. Los factores que más influyen en su longevidad son:',
          list: [
            'La higiene oral: cepillado correcto e hilo dental o cepillos interdentales',
            'Las revisiones periódicas con el especialista',
            'No someter la prótesis a fuerzas excesivas (morder objetos duros, bruxismo sin tratamiento)',
            'La calidad del ajuste inicial y del material utilizado',
          ],
        },
        {
          heading: '¿Cómo se coloca una prótesis dental fija?',
          body: 'El proceso varía dependiendo del tipo de prótesis. En general, implica:',
          list: [
            'Evaluación clínica y radiográfica para planificar el tratamiento',
            'Preparación del diente o colocación del implante (según el caso)',
            'Toma de impresión para fabricar la prótesis a medida en el laboratorio',
            'Colocación de una prótesis provisional mientras se fabrica la definitiva',
            'Cementación o atornillado de la prótesis definitiva y ajustes finales',
          ],
        },
        {
          heading: 'Cuidados para mantener tu prótesis fija en buen estado',
          list: [
            'Cepilla dos veces al día usando un cepillo de cabezal pequeño para llegar bien a todos los bordes',
            'Usa hilo dental o cepillos interdentales — especialmente bajo los puentes',
            'Si tienes bruxismo, usa una placa de descarga para proteger la prótesis de noche',
            'Visita a tu especialista cada 6-12 meses para revisión y limpieza profesional',
            'Evita morder objetos duros como hielo, lapiceros o uñas',
          ],
        },
      ],
      conclusion:
        'La prótesis dental fija es una solución duradera y funcional para recuperar dientes dañados o perdidos. No existe una opción única para todos: el tipo más adecuado depende de cuántos dientes faltan, del estado de los dientes vecinos y del hueso disponible.\n\nLa evaluación con un especialista en prostodoncia es el primer paso para saber cuál es la mejor alternativa para tu caso específico.',
      medicalDisclaimer:
        'Este artículo tiene fines educativos e informativos. No reemplaza la evaluación clínica de un profesional de la salud. Cada caso requiere diagnóstico personalizado.',
      callToAction:
        '¿Tienes dudas sobre si una prótesis fija es la opción adecuada para ti? Agenda una consulta con la Dra. Sandra Rodríguez, especialista en Rehabilitación Oral y Prostodoncia.',
    },
  },
  {
    id: 'post_003',
    slug: 'que-es-la-rehabilitacion-oral',
    title: '¿Qué es la rehabilitación oral y cuándo la necesitas?',
    subtitle: 'La especialidad que devuelve la función y la estética a tu boca',
    excerpt:
      'La rehabilitación oral va mucho más allá de una limpieza o un empaste. Es una especialidad que trata casos complejos donde varios dientes están comprometidos. Te explicamos en qué consiste y cuándo deberías consultar a un especialista.',
    date: '2026-03-28',
    readTime: 6,
    category: 'Rehabilitación Oral',
    coverImage: '/pelirroja.webp',
    coverImageAlt: 'Rehabilitación oral — Dra. Sandra Rodríguez, Bogotá',
    metaTitle: '¿Qué es la rehabilitación oral y cuándo la necesitas? | Sandra Rodríguez Dental',
    metaDescription:
      'Conoce qué es la rehabilitación oral, en qué se diferencia de la odontología general y cuáles son las señales de que necesitas esta especialidad. Guía de la Dra. Sandra Rodríguez.',
    focusKeyword: 'qué es la rehabilitación oral',
    content: {
      intro:
        'Cuando tienes uno o dos dientes con problemas, tu odontólogo general puede resolverlo. Pero hay situaciones donde el daño es más extendido: varios dientes perdidos, desgaste generalizado, mordida alterada, problemas para masticar o estética muy comprometida.\n\nEn esos casos entra en juego la rehabilitación oral — una especialidad odontológica que aborda la boca de forma integral, no diente por diente. En este artículo te explicamos en qué consiste, qué trata y cómo saber si necesitas un especialista.',
      sections: [
        {
          heading: '¿Qué es la rehabilitación oral?',
          body: 'La rehabilitación oral es la rama de la odontología especializada en restaurar la función masticatoria, el habla y la estética de pacientes que presentan daños complejos en su dentadura.\n\nA diferencia de una consulta de odontología general —donde se tratan problemas específicos y puntuales—, la rehabilitación oral diseña un plan de tratamiento global que contempla todos los dientes, la mordida, las encías y la articulación de la mandíbula en conjunto.',
        },
        {
          heading: '¿En qué se diferencia un rehabilitador oral de un odontólogo general?',
          body: 'El rehabilitador oral es un odontólogo con especialización de posgrado en prostodoncia y rehabilitación. Su formación le permite:\n\n- Planificar casos que involucran múltiples dientes o toda la boca\n- Coordinar diferentes tratamientos (implantes, coronas, prótesis, ortodoncia) dentro de un mismo plan\n- Tomar decisiones sobre la mordida y la función masticatoria de forma integral\n- Manejar casos con pérdida ósea, desgaste severo o rehabilitaciones completas\n\nEl odontólogo general es ideal para el mantenimiento rutinario. El rehabilitador oral se ocupa cuando la situación es más compleja.',
        },
        {
          heading: 'Señales de que podrías necesitar rehabilitación oral',
          body: 'Estas situaciones frecuentemente requieren una evaluación con un especialista en rehabilitación:',
          list: [
            'Has perdido varios dientes y la masticación se ha vuelto difícil o incómoda',
            'Tus dientes se han desgastado significativamente con el tiempo (por bruxismo u otras causas)',
            'Tienes una prótesis que ya no encaja bien o que llevas muchos años sin revisar',
            'Tu mordida ha cambiado — sientes que los dientes no encajan como antes',
            'Tienes implantes que necesitan la restauración final (corona o prótesis)',
            'Quieres mejorar la estética general de tu sonrisa de forma integral',
            'Tu odontólogo general te ha derivado a un especialista',
          ],
        },
        {
          heading: '¿Qué tratamientos incluye la rehabilitación oral?',
          body: 'La rehabilitación oral no es un tratamiento único — es un plan personalizado que puede combinar varios procedimientos según las necesidades de cada paciente:',
          subsections: [
            {
              heading: 'Prótesis fija',
              body: 'Coronas, puentes y prótesis sobre implantes que se cementan de forma permanente. Son la solución más cómoda y estable para reponer dientes perdidos o dañados.',
              internalLink: {
                anchor: 'prótesis fija',
                url: '/tratamientos/protesis/fija',
              },
            },
            {
              heading: 'Prótesis removible',
              body: 'Dentaduras parciales o completas que el paciente puede retirar. Se indica cuando no es posible una solución fija o cuando el paciente prefiere esta opción.',
              internalLink: {
                anchor: 'prótesis removible',
                url: '/tratamientos/protesis/removible',
              },
            },
            {
              heading: 'Prótesis sobre implantes',
              body: 'Cuando se han perdido uno o más dientes, los implantes actúan como raíces artificiales sobre las que se anclan coronas o prótesis. Es la solución más parecida al diente natural.',
              internalLink: {
                anchor: 'prótesis sobre implantes',
                url: '/tratamientos/protesis/sobreimplantes',
              },
            },
          ],
        },
        {
          heading: '¿Cómo es el proceso de rehabilitación oral?',
          body: 'Cada caso es diferente, pero en general el proceso sigue estas etapas:',
          list: [
            'Evaluación clínica completa: radiografías, modelos de estudio, fotografías y análisis de la mordida',
            'Diagnóstico y plan de tratamiento: el especialista propone las opciones y explica el proceso, tiempos y costos',
            'Fase preparatoria: tratamiento de encías, extracciones necesarias, colocación de implantes si aplica',
            'Fase restauradora: fabricación y colocación de coronas, prótesis o restauraciones definitivas',
            'Seguimiento y mantenimiento: revisiones periódicas para garantizar la durabilidad del resultado',
          ],
        },
        {
          heading: '¿Cuánto tiempo dura un tratamiento de rehabilitación oral?',
          body: 'La duración varía enormemente según la complejidad del caso. Un tratamiento sencillo de dos o tres coronas puede resolverse en pocas semanas. Una rehabilitación completa con implantes puede extenderse entre 6 y 18 meses.\n\nEl tiempo se ve influenciado por factores como la necesidad de extracciones previas, el tiempo de integración de los implantes al hueso, la fabricación de las prótesis en el laboratorio y el estado general de salud del paciente.',
        },
        {
          heading: '¿La rehabilitación oral es solo estética?',
          body: 'No — y esta es una idea frecuentemente equivocada. La rehabilitación oral tiene como objetivo principal restaurar la función: que el paciente pueda masticar correctamente, hablar con claridad y mantener una salud bucal sostenible a largo plazo.\n\nLa mejora estética es una consecuencia natural de recuperar esa función, pero no es el único ni el principal objetivo del tratamiento.',
        },
      ],
      conclusion:
        'Si llevas tiempo con dificultades para masticar, con dientes desgastados, prótesis antiguas o varios dientes perdidos, una consulta con un especialista en rehabilitación oral puede darte un diagnóstico claro y un plan realista para recuperar tu calidad de vida.\n\nNo se trata de una intervención cosmética — se trata de que tu boca funcione como debe.',
      medicalDisclaimer:
        'Este artículo tiene fines educativos e informativos. No reemplaza la evaluación clínica de un profesional de la salud. Cada caso requiere diagnóstico personalizado.',
      callToAction:
        '¿Crees que necesitas una evaluación integral? Agenda una consulta con la Dra. Sandra Rodríguez, especialista en Rehabilitación Oral y Prostodoncia con más de 20 años de experiencia en Bogotá.',
    },
  },
  {
    id: 'post_004',
    slug: 'bruxismo-consecuencias-y-tratamiento',
    title: 'Bruxismo: qué le hace a tus dientes y cómo tratarlo',
    subtitle: 'El hábito silencioso que destruye la dentadura poco a poco',
    excerpt:
      'Apretar o rechinar los dientes mientras duermes puede parecer inofensivo, pero el bruxismo es una de las causas más frecuentes de desgaste dental severo. Te explicamos qué lo provoca, qué daños produce y qué opciones de tratamiento existen.',
    date: '2026-04-04',
    readTime: 5,
    category: 'Salud Bucal',
    coverImage: '/sandra.webp',
    coverImageAlt: 'Bruxismo y desgaste dental — Dra. Sandra Rodríguez, Bogotá',
    metaTitle: 'Bruxismo: consecuencias para tus dientes y cómo tratarlo | Sandra Rodríguez Dental',
    metaDescription:
      'El bruxismo desgasta los dientes y puede causar daños irreversibles. Conoce sus causas, señales de alerta y las opciones de tratamiento. Guía de la Dra. Sandra Rodríguez.',
    focusKeyword: 'bruxismo consecuencias dientes',
    content: {
      intro:
        'Muchas personas aprietan o rechinan los dientes sin saberlo, especialmente durante el sueño. Este hábito se llama bruxismo y, aunque parece inofensivo, puede causar un daño serio y acumulativo en la dentadura.\n\nEl problema es que el bruxismo suele pasar desapercibido durante años — hasta que el desgaste ya es visible o aparecen dolores de mandíbula, cabeza o cuello. En este artículo te explicamos qué es, cómo identificarlo y qué puedes hacer al respecto.',
      sections: [
        {
          heading: '¿Qué es el bruxismo?',
          body: 'El bruxismo es el hábito involuntario de apretar o rechinar los dientes. Puede ocurrir durante el sueño (bruxismo nocturno) o de forma inconsciente durante el día (bruxismo diurno).\n\nEs más frecuente de lo que parece: se estima que entre el 8 y el 31% de la población lo padece en algún momento de su vida. El estrés, la ansiedad y ciertos trastornos del sueño son los factores más frecuentemente asociados a su aparición.',
        },
        {
          heading: 'Señales de que podrías tener bruxismo',
          body: 'Como ocurre durante el sueño, muchas personas no son conscientes de que lo tienen. Estas son las señales más comunes:',
          list: [
            'Desgaste visible en los bordes de los dientes — se ven planos o más cortos de lo normal',
            'Sensibilidad dental aumentada, especialmente al frío y al calor',
            'Dolor de mandíbula, cuello o cabeza al despertar',
            'Cansancio o tensión en los músculos de la cara por las mañanas',
            'Tu pareja o familiar escucha el rechinar de dientes mientras duermes',
            'Fracturas o fisuras en los dientes sin causa aparente',
            'Desgaste acelerado de coronas o restauraciones dentales',
          ],
        },
        {
          heading: '¿Qué daños produce el bruxismo en los dientes?',
          body: 'Las fuerzas generadas al rechinar los dientes pueden ser varias veces superiores a las de una masticación normal. Con el tiempo, esto produce:',
          subsections: [
            {
              heading: 'Desgaste del esmalte',
              body: 'El esmalte dental es el tejido más duro del cuerpo, pero no se regenera. Una vez desgastado, la capa interior del diente (dentina) queda expuesta, aumentando la sensibilidad y el riesgo de caries.',
            },
            {
              heading: 'Fracturas y fisuras',
              body: 'La presión repetida puede fracturar dientes que de otro modo estarían sanos, o agrietar dientes que ya tenían restauraciones, obligando a tratamientos más complejos.',
            },
            {
              heading: 'Daño en las restauraciones',
              body: 'Las coronas, puentes y prótesis también se ven afectados por el bruxismo. El desgaste prematuro de estas restauraciones es una de las razones más frecuentes por las que hay que reemplazarlas antes de lo esperado.',
            },
            {
              heading: 'Problemas en la articulación temporomandibular (ATM)',
              body: 'La mandíbula se articula con el cráneo en dos puntos (uno a cada lado). El bruxismo puede sobrecargar estas articulaciones, causando dolor, chasquidos, dificultad para abrir la boca y, en casos severos, daño articular.',
            },
          ],
        },
        {
          heading: '¿Cómo se trata el bruxismo?',
          body: 'El bruxismo no tiene cura definitiva, pero sí se puede controlar y prevenir el daño que produce. El tratamiento habitualmente combina varias estrategias:',
          subsections: [
            {
              heading: 'Placa de descarga (férula oclusal)',
              body: 'Es el tratamiento más habitual. Se trata de una placa personalizada de acrílico que se coloca sobre los dientes superiores o inferiores durante el sueño. No elimina el bruxismo, pero absorbe las fuerzas y protege los dientes del desgaste.',
            },
            {
              heading: 'Rehabilitación del desgaste acumulado',
              body: 'Cuando el bruxismo ya ha causado desgaste significativo, es necesario restaurar la altura y la forma de los dientes afectados. Según el grado de daño, esto puede hacerse con coronas dentales, carillas o una rehabilitación oral completa.',
              internalLink: {
                anchor: 'rehabilitación oral completa',
                url: '/tratamientos/protesis/fija',
              },
            },
            {
              heading: 'Manejo del estrés',
              body: 'Dado que el estrés y la ansiedad son factores desencadenantes frecuentes, técnicas de relajación, fisioterapia en la zona cervical y, en algunos casos, apoyo psicológico pueden reducir la intensidad del bruxismo.',
            },
            {
              heading: 'Toxina botulínica (bótox) en maseteros',
              body: 'En casos severos donde los músculos masticadores están muy desarrollados y la placa no es suficiente, las inyecciones de toxina botulínica en los músculos maseteros pueden reducir la fuerza de la mordida y aliviar los síntomas.',
            },
          ],
        },
        {
          heading: '¿El bruxismo afecta más a ciertas personas?',
          body: 'El bruxismo puede aparecer a cualquier edad, incluso en niños. Sin embargo, es más frecuente en personas con altos niveles de estrés o ansiedad, en quienes tienen alteraciones del sueño y en pacientes que toman ciertos medicamentos (como algunos antidepresivos).\n\nEl consumo de cafeína en exceso y el tabaco también están asociados a mayor incidencia de bruxismo.',
        },
        {
          heading: '¿Qué pasa si no trato el bruxismo?',
          body: 'Ignorar el bruxismo tiene consecuencias que se agravan con el tiempo:\n\n- El desgaste dental es irreversible — el esmalte no se recupera solo\n- Los tratamientos restauradores se vuelven más extensos y costosos cuanto mayor es el daño acumulado\n- El dolor de mandíbula y cuello puede volverse crónico\n- Las restauraciones existentes (coronas, prótesis) se deterioran más rápido\n\nDiagnosticarlo y tratarlo a tiempo es siempre más sencillo y menos costoso que esperar a que el daño sea severo.',
        },
      ],
      conclusion:
        'El bruxismo es un problema silencioso pero con consecuencias reales y acumulativas. Si tienes señales de desgaste dental, dolor de mandíbula al despertar o sospechas que aprietas los dientes de noche, lo más importante es confirmarlo con una evaluación especializada.\n\nCon el tratamiento adecuado se puede proteger lo que tienes y, si ya hay daño, restaurarlo de forma duradera.',
      medicalDisclaimer:
        'Este artículo tiene fines educativos e informativos. No reemplaza la evaluación clínica de un profesional de la salud. Cada caso requiere diagnóstico personalizado.',
      callToAction:
        '¿Crees que tienes bruxismo o notas desgaste en tus dientes? Agenda una consulta con la Dra. Sandra Rodríguez para una evaluación completa y un plan de tratamiento a tu medida.',
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
