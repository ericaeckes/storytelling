var config = {
    style: 'mapbox://styles/ericaeckes/ck4bm90k02fv11cn05hwlmceg',
    accessToken: 'pk.eyJ1IjoiZXJpY2FlY2tlcyIsImEiOiJjazRibnh0bzkwZmlqM2txdDBiMnYwMzQxIn0.tyznBpWxiuOVrfTo5F6gEA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Where I have gone',
    subtitle: 'A simple journey',
    byline: 'By Erica Eckes',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Where I grew up',
            image: './path/to/image/source.png',
            description: 'A small town childhood',
            location: {
              center: [-74.58259, 41.38763],
              zoom: 16.00,
              pitch: 60.00,
              bearing: 59.08
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'My freshman dorm',
            image: './path/to/image/source.png',
            description: 'a home away from home',
            location: {
              center: [-77.04547, 38.89753],
              zoom: 20.00,
              pitch: 60.00,
              bearing: 59.08
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'My first apartment',
            image: './path/to/image/source.png',
            description: 'It was tiny, but I loved it',
            location: {
              center: [-77.04697, 38.89645],
              zoom: 20.59,
              pitch: 60.00,
              bearing: -122.35
            },
            onChapterEnter: [],
            onChapterExit: []
        },
          {
              id: 'other-identifier',
              title: 'My Sorority House',
              image: './path/to/image/source.png',
              description: 'Where I spent most of my years',
              location: {
                center: [-77.04991, 38.89784],
                zoom: 20.84,
                pitch: 60.00,
                bearing: 91.04
              },
              onChapterEnter: [],
              onChapterExit: []
          },
          {
              id: 'other-identifier',
              title: 'First "real" apartment',
              image: './path/to/image/source.png',
              description: 'Three roommates. Two bedrooms.',
              location: {
                center: [-77.05290, 38.90651],
                zoom: 18.57,
                pitch: 60.00,
                bearing: 91.04
              },
              onChapterEnter: [],
              onChapterExit: []
          },
          {
              id: 'other-identifier',
              title: 'Jordi''s studio',
              image: './path/to/image/source.png',
              description: 'I guess it was mine too',
              location: {
                center: [-77.04841, 38.90946],
                zoom: 19.38,
                pitch: 60.00,
                bearing: 131.23
              },
              onChapterEnter: [],
              onChapterExit: []
          },
          {
              id: 'other-identifier',
              title: 'Our first apartment together',
              image: './path/to/image/source.png',
              description: 'Finally enough space for us',
              location: {
                center: [-77.03418, 38.90688],
                zoom: 19.15,
                pitch: 60.00,
                bearing: 131.23
              },
              onChapterEnter: [],
              onChapterExit: []
          }
      ]
  };
