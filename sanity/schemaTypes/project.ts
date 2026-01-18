import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'المنتجات',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'اسم المنتج',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'وصف المنتج',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'السعر',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'صورة المنتج',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'الفئة (Category)',
      type: 'string',
      placeholder: 'مثلاً: أطقم لحاف، مخدات...',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sizes',
      title: 'المقاسات المتاحة',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'S', value: 'S' },
          { title: 'M', value: 'M' },
          { title: 'L', value: 'L' },
          { title: 'XL', value: 'XL' },
          { title: 'مفرد (Single)', value: 'single' },
          { title: 'مزدوج (Double)', value: 'double' },
          { title: 'كينج (King)', value: 'king' },
        ],
      },
    }),

    defineField({
      name: 'isBestseller',
      title: 'من الأكثر مبيعاً؟',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})