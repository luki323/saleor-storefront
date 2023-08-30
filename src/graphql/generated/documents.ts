// @ts-nocheck
import type * as Types from './types';

import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type AccountError = { readonly field?: string | null, readonly code: Types.AccountErrorCode };

export type LogInVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type LogIn = { readonly tokenCreate?: { readonly token?: string | null, readonly refreshToken?: string | null, readonly csrfToken?: string | null, readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.AccountErrorCode }> } | null };

export type ChangePasswordVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type ChangePassword = { readonly setPassword?: { readonly token?: string | null, readonly refreshToken?: string | null, readonly csrfToken?: string | null, readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.AccountErrorCode }> } | null };

export type ConfirmAccountVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
}>;


export type ConfirmAccount = { readonly confirmAccount?: { readonly user?: { readonly isActive: boolean } | null, readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.AccountErrorCode }> } | null };

export type RequestPasswordResetVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  redirectUrl: Types.Scalars['String']['input'];
  channel: Types.Scalars['String']['input'];
}>;


export type RequestPasswordReset = { readonly requestPasswordReset?: { readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.AccountErrorCode }> } | null };

export type SignUpVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
  channel: Types.Scalars['String']['input'];
  redirectUrl: Types.Scalars['String']['input'];
}>;


export type SignUp = { readonly accountRegister?: { readonly requiresConfirmation?: boolean | null, readonly user?: { readonly email: string } | null, readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.AccountErrorCode }> } | null };

export type GetHeaderMenuVariables = Types.Exact<{
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
  languageCode: Types.LanguageCodeEnum;
}>;


export type GetHeaderMenu = { readonly menu?: { readonly items?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly page?: { readonly slug: string } | null, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly translation?: { readonly name: string } | null, readonly category?: { readonly slug: string, readonly name: string } | null }> | null } | null };

export type HeaderMenuItemFragment = { readonly id: string, readonly name: string, readonly page?: { readonly slug: string } | null, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly translation?: { readonly name: string } | null, readonly category?: { readonly slug: string, readonly name: string } | null };

export type HeaderMenuLinkFragment = { readonly name: string, readonly page?: { readonly slug: string } | null, readonly translation?: { readonly name: string } | null };

export type HeaderDropdownMenuFragment = { readonly name: string, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly children?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null }> | null, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null };

export type HeaderMenuDropdownItemFragment = { readonly name: string, readonly category?: { readonly slug: string, readonly name: string } | null, readonly translation?: { readonly name: string } | null };

export type HeaderMenuItemTranslation = { readonly translation?: { readonly name: string } | null };

export type GetNavCategoriesVariables = Types.Exact<{
  languageCode: Types.LanguageCodeEnum;
}>;


export type GetNavCategories = { readonly categories?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly level: number, readonly name: string, readonly slug: string, readonly children?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly level: number, readonly name: string, readonly slug: string, readonly children?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly level: number, readonly name: string, readonly slug: string, readonly translation?: { readonly name?: string | null } | null } }> } | null, readonly translation?: { readonly name?: string | null } | null } }> } | null, readonly translation?: { readonly name?: string | null } | null } }> } | null };

export type NavCategoriesItem = { readonly id: string, readonly level: number, readonly name: string, readonly slug: string, readonly translation?: { readonly name?: string | null } | null };

export type CategoryNavLinksItemFragment = { readonly id: string, readonly level: number, readonly name: string, readonly slug: string };

export type CategoryNavLinkFragment = { readonly name: string, readonly slug: string };

export type GetNavCollectionsVariables = Types.Exact<{
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
  languageCode: Types.LanguageCodeEnum;
}>;


export type GetNavCollections = { readonly collections?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly name: string, readonly slug: string, readonly translation?: { readonly name?: string | null } | null } }> } | null };

export type NavCollectionsItem = { readonly id: string, readonly name: string, readonly slug: string, readonly translation?: { readonly name?: string | null } | null };

export type CollectionNavLinksItemFragment = { readonly id: string, readonly name: string, readonly slug: string };

export type CollectionNavLinkFragment = { readonly name: string, readonly slug: string };

export type GetProductsVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  search?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.InputMaybe<Types.ProductFilterInput>;
  address?: Types.InputMaybe<Types.AddressInput>;
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
  languageCode: Types.LanguageCodeEnum;
}>;


export type GetProducts = { readonly products?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly name: string, readonly slug: string, readonly isAvailable?: boolean | null, readonly translation?: { readonly name?: string | null } | null, readonly defaultVariant?: { readonly pricing?: { readonly onSale?: boolean | null, readonly price?: { readonly gross: { readonly currency: string, readonly amount: number } } | null, readonly priceUndiscounted?: { readonly gross: { readonly currency: string, readonly amount: number } } | null } | null } | null, readonly thumbnail?: { readonly url: string, readonly alt?: string | null } | null, readonly collections?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly translation?: { readonly name?: string | null } | null }> | null } }>, readonly pageInfo: { readonly startCursor?: string | null, readonly hasNextPage: boolean, readonly endCursor?: string | null, readonly hasPreviousPage: boolean } } | null };

export type ProductCard = { readonly name: string, readonly slug: string, readonly isAvailable?: boolean | null, readonly defaultVariant?: { readonly pricing?: { readonly onSale?: boolean | null, readonly price?: { readonly gross: { readonly currency: string, readonly amount: number } } | null, readonly priceUndiscounted?: { readonly gross: { readonly currency: string, readonly amount: number } } | null } | null } | null, readonly thumbnail?: { readonly url: string, readonly alt?: string | null } | null, readonly collections?: ReadonlyArray<{ readonly id: string, readonly name: string, readonly translation?: { readonly name?: string | null } | null }> | null };

export type ProductCardPricing = { readonly onSale?: boolean | null, readonly price?: { readonly gross: { readonly currency: string, readonly amount: number } } | null, readonly priceUndiscounted?: { readonly gross: { readonly currency: string, readonly amount: number } } | null };

export type ProductCardCollectionName = { readonly name: string };

export type Image = { readonly url: string, readonly alt?: string | null };

export type Money = { readonly currency: string, readonly amount: number };

export type PageInfo = { readonly startCursor?: string | null, readonly hasNextPage: boolean, readonly endCursor?: string | null, readonly hasPreviousPage: boolean };

export type GetProductAttributesVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AttributeWhereInput>;
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
  languageCode: Types.LanguageCodeEnum;
}>;


export type GetProductAttributes = { readonly attributes?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly name?: string | null, readonly slug?: string | null, readonly type?: Types.AttributeTypeEnum | null, readonly inputType?: Types.AttributeInputTypeEnum | null, readonly translation?: { readonly name: string } | null, readonly choices?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly name?: string | null, readonly slug?: string | null, readonly translation?: { readonly name: string } | null } }> } | null } }> } | null };

export type ProductAttributeFragment = { readonly name?: string | null, readonly slug?: string | null, readonly type?: Types.AttributeTypeEnum | null, readonly inputType?: Types.AttributeInputTypeEnum | null, readonly choices?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly name?: string | null, readonly slug?: string | null, readonly translation?: { readonly name: string } | null } }> } | null };

export type ProductAttributeValueFragment = { readonly name?: string | null, readonly slug?: string | null };

export type GetCategoryIdsVariables = Types.Exact<{
  slugs: ReadonlyArray<Types.Scalars['String']['input']> | Types.Scalars['String']['input'];
}>;


export type GetCategoryIds = { readonly categories?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string } }> } | null };

export type GetCollectionIdsVariables = Types.Exact<{
  slugs: ReadonlyArray<Types.Scalars['String']['input']> | Types.Scalars['String']['input'];
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetCollectionIds = { readonly collections?: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string } }> } | null };

export type Address = { readonly firstName: string, readonly lastName: string, readonly streetAddress1: string, readonly streetAddress2: string, readonly city: string, readonly countryArea: string, readonly postalCode: string, readonly country: { readonly code: string, readonly country: string } };

export type UpdateCheckoutBillingAddressVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  billingAddress: Types.AddressInput;
}>;


export type UpdateCheckoutBillingAddress = { readonly checkoutBillingAddressUpdate?: { readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.CheckoutErrorCode }> } | null };

export type GetAddressValidationRulesVariables = Types.Exact<{
  countryCode: Types.CountryCode;
}>;


export type GetAddressValidationRules = { readonly addressValidationRules?: { readonly postalCodeMatchers: ReadonlyArray<string>, readonly postalCodeExamples: ReadonlyArray<string>, readonly countryAreaChoices: ReadonlyArray<{ readonly raw?: string | null, readonly verbose?: string | null }> } | null };

export type GetCheckoutVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetCheckout = { readonly checkout?: { readonly email?: string | null, readonly shippingMethod?: { readonly id: string } | {} | null, readonly shippingMethods: ReadonlyArray<{ readonly id: string, readonly maximumDeliveryDays?: number | null, readonly minimumDeliveryDays?: number | null, readonly active: boolean, readonly name: string, readonly price: { readonly currency: string, readonly amount: number } }>, readonly billingAddress?: { readonly firstName: string, readonly lastName: string, readonly streetAddress1: string, readonly streetAddress2: string, readonly city: string, readonly countryArea: string, readonly postalCode: string, readonly country: { readonly code: string, readonly country: string } } | null, readonly shippingAddress?: { readonly firstName: string, readonly lastName: string, readonly streetAddress1: string, readonly streetAddress2: string, readonly city: string, readonly countryArea: string, readonly postalCode: string, readonly country: { readonly code: string, readonly country: string } } | null } | null };

export type GetCountryCodesVariables = Types.Exact<{
  channel: Types.Scalars['String']['input'];
}>;


export type GetCountryCodes = { readonly channel?: { readonly countries?: ReadonlyArray<{ readonly code: string }> | null } | null };

export type UpdateCheckoutEmailVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  email: Types.Scalars['String']['input'];
}>;


export type UpdateCheckoutEmail = { readonly checkoutEmailUpdate?: { readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.CheckoutErrorCode }> } | null };

export type UpdateCheckoutShippingAddressVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  shippingAddress: Types.AddressInput;
}>;


export type UpdateCheckoutShippingAddress = { readonly checkoutShippingAddressUpdate?: { readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.CheckoutErrorCode }> } | null };

export type UpdateCheckoutDeliveryMethodVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  deliveryMethodId: Types.Scalars['ID']['input'];
}>;


export type UpdateCheckoutDeliveryMethod = { readonly checkoutDeliveryMethodUpdate?: { readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.CheckoutErrorCode }> } | null };

export type RefreshAccessTokenVariables = Types.Exact<{
  refreshToken: Types.Scalars['String']['input'];
}>;


export type RefreshAccessToken = { readonly tokenRefresh?: { readonly token?: string | null, readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.AccountErrorCode }> } | null };

export type CheckoutError = { readonly field?: string | null, readonly code: Types.CheckoutErrorCode };

export type AddCheckoutLineVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  line: Types.CheckoutLineInput;
}>;


export type AddCheckoutLine = { readonly checkoutLinesAdd?: { readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.CheckoutErrorCode }> } | null };

export type CreateCheckoutVariables = Types.Exact<{
  lines: ReadonlyArray<Types.CheckoutLineInput> | Types.CheckoutLineInput;
  channel: Types.Scalars['String']['input'];
  languageCode: Types.LanguageCodeEnum;
  email?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CreateCheckout = { readonly checkoutCreate?: { readonly checkout?: { readonly id: string } | null, readonly errors: ReadonlyArray<{ readonly field?: string | null, readonly code: Types.CheckoutErrorCode }> } | null };

export type GetCheckoutSummaryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  languageCode: Types.LanguageCodeEnum;
}>;


export type GetCheckoutSummary = { readonly checkout?: { readonly displayGrossPrices: boolean, readonly lines: ReadonlyArray<{ readonly quantity: number, readonly id: string, readonly totalPrice: { readonly currency: string, readonly net: { readonly amount: number }, readonly gross: { readonly amount: number } }, readonly variant: { readonly product: { readonly name: string, readonly translation?: { readonly name?: string | null } | null, readonly media?: ReadonlyArray<{ readonly url: string, readonly alt: string }> | null } } }>, readonly subtotalPrice: { readonly currency: string, readonly net: { readonly amount: number }, readonly gross: { readonly amount: number } }, readonly shippingPrice: { readonly currency: string, readonly net: { readonly amount: number }, readonly gross: { readonly amount: number } }, readonly totalPrice: { readonly currency: string, readonly net: { readonly amount: number }, readonly gross: { readonly amount: number } } } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const AccountError = new TypedDocumentString(`
    fragment accountError on AccountError {
  field
  code
}
    `, {"fragmentName":"accountError"}) as unknown as TypedDocumentString<AccountError, unknown>;
export const HeaderMenuItemTranslation = new TypedDocumentString(`
    fragment headerMenuItemTranslation on MenuItem {
  translation(languageCode: $languageCode) {
    name
  }
}
    `, {"fragmentName":"headerMenuItemTranslation"}) as unknown as TypedDocumentString<HeaderMenuItemTranslation, unknown>;
export const HeaderMenuLinkFragment = new TypedDocumentString(`
    fragment headerMenuLinkFragment on MenuItem {
  name
  page {
    slug
  }
  ...headerMenuItemTranslation
}
    fragment headerMenuItemTranslation on MenuItem {
  translation(languageCode: $languageCode) {
    name
  }
}`, {"fragmentName":"headerMenuLinkFragment"}) as unknown as TypedDocumentString<HeaderMenuLinkFragment, unknown>;
export const HeaderMenuDropdownItemFragment = new TypedDocumentString(`
    fragment headerMenuDropdownItemFragment on MenuItem {
  name
  category {
    slug
    name
  }
  ...headerMenuItemTranslation
}
    fragment headerMenuItemTranslation on MenuItem {
  translation(languageCode: $languageCode) {
    name
  }
}`, {"fragmentName":"headerMenuDropdownItemFragment"}) as unknown as TypedDocumentString<HeaderMenuDropdownItemFragment, unknown>;
export const HeaderDropdownMenuFragment = new TypedDocumentString(`
    fragment headerDropdownMenuFragment on MenuItem {
  ...headerMenuDropdownItemFragment
  children {
    id
    ...headerMenuDropdownItemFragment
    children {
      id
      ...headerMenuDropdownItemFragment
      children {
        id
        ...headerMenuDropdownItemFragment
      }
    }
  }
}
    fragment headerMenuDropdownItemFragment on MenuItem {
  name
  category {
    slug
    name
  }
  ...headerMenuItemTranslation
}
fragment headerMenuItemTranslation on MenuItem {
  translation(languageCode: $languageCode) {
    name
  }
}`, {"fragmentName":"headerDropdownMenuFragment"}) as unknown as TypedDocumentString<HeaderDropdownMenuFragment, unknown>;
export const HeaderMenuItemFragment = new TypedDocumentString(`
    fragment headerMenuItemFragment on MenuItem {
  id
  ...headerMenuLinkFragment
  ...headerDropdownMenuFragment
}
    fragment headerMenuLinkFragment on MenuItem {
  name
  page {
    slug
  }
  ...headerMenuItemTranslation
}
fragment headerDropdownMenuFragment on MenuItem {
  ...headerMenuDropdownItemFragment
  children {
    id
    ...headerMenuDropdownItemFragment
    children {
      id
      ...headerMenuDropdownItemFragment
      children {
        id
        ...headerMenuDropdownItemFragment
      }
    }
  }
}
fragment headerMenuDropdownItemFragment on MenuItem {
  name
  category {
    slug
    name
  }
  ...headerMenuItemTranslation
}
fragment headerMenuItemTranslation on MenuItem {
  translation(languageCode: $languageCode) {
    name
  }
}`, {"fragmentName":"headerMenuItemFragment"}) as unknown as TypedDocumentString<HeaderMenuItemFragment, unknown>;
export const CategoryNavLinkFragment = new TypedDocumentString(`
    fragment categoryNavLinkFragment on Category {
  name
  slug
}
    `, {"fragmentName":"categoryNavLinkFragment"}) as unknown as TypedDocumentString<CategoryNavLinkFragment, unknown>;
export const CategoryNavLinksItemFragment = new TypedDocumentString(`
    fragment categoryNavLinksItemFragment on Category {
  id
  level
  ...categoryNavLinkFragment
}
    fragment categoryNavLinkFragment on Category {
  name
  slug
}`, {"fragmentName":"categoryNavLinksItemFragment"}) as unknown as TypedDocumentString<CategoryNavLinksItemFragment, unknown>;
export const NavCategoriesItem = new TypedDocumentString(`
    fragment navCategoriesItem on Category {
  translation(languageCode: $languageCode) {
    name
  }
  ...categoryNavLinksItemFragment
}
    fragment categoryNavLinksItemFragment on Category {
  id
  level
  ...categoryNavLinkFragment
}
fragment categoryNavLinkFragment on Category {
  name
  slug
}`, {"fragmentName":"navCategoriesItem"}) as unknown as TypedDocumentString<NavCategoriesItem, unknown>;
export const CollectionNavLinkFragment = new TypedDocumentString(`
    fragment collectionNavLinkFragment on Collection {
  name
  slug
}
    `, {"fragmentName":"collectionNavLinkFragment"}) as unknown as TypedDocumentString<CollectionNavLinkFragment, unknown>;
export const CollectionNavLinksItemFragment = new TypedDocumentString(`
    fragment collectionNavLinksItemFragment on Collection {
  id
  ...collectionNavLinkFragment
}
    fragment collectionNavLinkFragment on Collection {
  name
  slug
}`, {"fragmentName":"collectionNavLinksItemFragment"}) as unknown as TypedDocumentString<CollectionNavLinksItemFragment, unknown>;
export const NavCollectionsItem = new TypedDocumentString(`
    fragment navCollectionsItem on Collection {
  translation(languageCode: $languageCode) {
    name
  }
  ...collectionNavLinksItemFragment
}
    fragment collectionNavLinksItemFragment on Collection {
  id
  ...collectionNavLinkFragment
}
fragment collectionNavLinkFragment on Collection {
  name
  slug
}`, {"fragmentName":"navCollectionsItem"}) as unknown as TypedDocumentString<NavCollectionsItem, unknown>;
export const Money = new TypedDocumentString(`
    fragment money on Money {
  currency
  amount
}
    `, {"fragmentName":"money"}) as unknown as TypedDocumentString<Money, unknown>;
export const ProductCardPricing = new TypedDocumentString(`
    fragment productCardPricing on VariantPricingInfo {
  onSale
  price {
    gross {
      ...money
    }
  }
  priceUndiscounted {
    gross {
      ...money
    }
  }
}
    fragment money on Money {
  currency
  amount
}`, {"fragmentName":"productCardPricing"}) as unknown as TypedDocumentString<ProductCardPricing, unknown>;
export const Image = new TypedDocumentString(`
    fragment image on Image {
  url
  alt
}
    `, {"fragmentName":"image"}) as unknown as TypedDocumentString<Image, unknown>;
export const ProductCardCollectionName = new TypedDocumentString(`
    fragment productCardCollectionName on Collection {
  name
}
    `, {"fragmentName":"productCardCollectionName"}) as unknown as TypedDocumentString<ProductCardCollectionName, unknown>;
export const ProductCard = new TypedDocumentString(`
    fragment productCard on Product {
  name
  slug
  defaultVariant {
    pricing(address: $address) {
      ...productCardPricing
    }
  }
  isAvailable
  thumbnail(size: 4096) {
    ...image
  }
  collections {
    id
    translation(languageCode: $languageCode) {
      name
    }
    ...productCardCollectionName
  }
}
    fragment productCardPricing on VariantPricingInfo {
  onSale
  price {
    gross {
      ...money
    }
  }
  priceUndiscounted {
    gross {
      ...money
    }
  }
}
fragment productCardCollectionName on Collection {
  name
}
fragment image on Image {
  url
  alt
}
fragment money on Money {
  currency
  amount
}`, {"fragmentName":"productCard"}) as unknown as TypedDocumentString<ProductCard, unknown>;
export const PageInfo = new TypedDocumentString(`
    fragment pageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}
    `, {"fragmentName":"pageInfo"}) as unknown as TypedDocumentString<PageInfo, unknown>;
export const ProductAttributeValueFragment = new TypedDocumentString(`
    fragment productAttributeValueFragment on AttributeValue {
  name
  slug
}
    `, {"fragmentName":"productAttributeValueFragment"}) as unknown as TypedDocumentString<ProductAttributeValueFragment, unknown>;
export const ProductAttributeFragment = new TypedDocumentString(`
    fragment productAttributeFragment on Attribute {
  name
  slug
  type
  inputType
  choices(first: 20) {
    edges {
      node {
        id
        translation(languageCode: $languageCode) {
          name
        }
        ...productAttributeValueFragment
      }
    }
  }
}
    fragment productAttributeValueFragment on AttributeValue {
  name
  slug
}`, {"fragmentName":"productAttributeFragment"}) as unknown as TypedDocumentString<ProductAttributeFragment, unknown>;
export const Address = new TypedDocumentString(`
    fragment address on Address {
  country {
    code
    country
  }
  firstName
  lastName
  streetAddress1
  streetAddress2
  city
  countryArea
  postalCode
}
    `, {"fragmentName":"address"}) as unknown as TypedDocumentString<Address, unknown>;
export const CheckoutError = new TypedDocumentString(`
    fragment checkoutError on CheckoutError {
  field
  code
}
    `, {"fragmentName":"checkoutError"}) as unknown as TypedDocumentString<CheckoutError, unknown>;
export const LogInDocument = new TypedDocumentString(`
    mutation logIn($email: String!, $password: String!) {
  tokenCreate(email: $email, password: $password) {
    token
    refreshToken
    csrfToken
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<LogIn, LogInVariables>;
export const ChangePasswordDocument = new TypedDocumentString(`
    mutation changePassword($email: String!, $token: String!, $password: String!) {
  setPassword(email: $email, token: $token, password: $password) {
    token
    refreshToken
    csrfToken
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<ChangePassword, ChangePasswordVariables>;
export const ConfirmAccountDocument = new TypedDocumentString(`
    mutation confirmAccount($email: String!, $token: String!) {
  confirmAccount(email: $email, token: $token) {
    user {
      isActive
    }
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<ConfirmAccount, ConfirmAccountVariables>;
export const RequestPasswordResetDocument = new TypedDocumentString(`
    mutation requestPasswordReset($email: String!, $redirectUrl: String!, $channel: String!) {
  requestPasswordReset(
    email: $email
    redirectUrl: $redirectUrl
    channel: $channel
  ) {
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<RequestPasswordReset, RequestPasswordResetVariables>;
export const SignUpDocument = new TypedDocumentString(`
    mutation signUp($email: String!, $password: String!, $channel: String!, $redirectUrl: String!) {
  accountRegister(
    input: {email: $email, password: $password, channel: $channel, redirectUrl: $redirectUrl}
  ) {
    user {
      email
    }
    errors {
      ...accountError
    }
    requiresConfirmation
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<SignUp, SignUpVariables>;
export const GetHeaderMenuDocument = new TypedDocumentString(`
    query getHeaderMenu($channel: String, $languageCode: LanguageCodeEnum!) {
  menu(name: "header", channel: $channel) {
    items {
      ...headerMenuItemFragment
    }
  }
}
    fragment headerMenuItemFragment on MenuItem {
  id
  ...headerMenuLinkFragment
  ...headerDropdownMenuFragment
}
fragment headerMenuLinkFragment on MenuItem {
  name
  page {
    slug
  }
  ...headerMenuItemTranslation
}
fragment headerDropdownMenuFragment on MenuItem {
  ...headerMenuDropdownItemFragment
  children {
    id
    ...headerMenuDropdownItemFragment
    children {
      id
      ...headerMenuDropdownItemFragment
      children {
        id
        ...headerMenuDropdownItemFragment
      }
    }
  }
}
fragment headerMenuDropdownItemFragment on MenuItem {
  name
  category {
    slug
    name
  }
  ...headerMenuItemTranslation
}
fragment headerMenuItemTranslation on MenuItem {
  translation(languageCode: $languageCode) {
    name
  }
}`) as unknown as TypedDocumentString<GetHeaderMenu, GetHeaderMenuVariables>;
export const GetNavCategoriesDocument = new TypedDocumentString(`
    query getNavCategories($languageCode: LanguageCodeEnum!) {
  categories(level: 0, first: 12) {
    edges {
      node {
        ...navCategoriesItem
        children(first: 12) {
          edges {
            node {
              ...navCategoriesItem
              children(first: 12) {
                edges {
                  node {
                    ...navCategoriesItem
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    fragment navCategoriesItem on Category {
  translation(languageCode: $languageCode) {
    name
  }
  ...categoryNavLinksItemFragment
}
fragment categoryNavLinksItemFragment on Category {
  id
  level
  ...categoryNavLinkFragment
}
fragment categoryNavLinkFragment on Category {
  name
  slug
}`) as unknown as TypedDocumentString<GetNavCategories, GetNavCategoriesVariables>;
export const GetNavCollectionsDocument = new TypedDocumentString(`
    query getNavCollections($channel: String, $languageCode: LanguageCodeEnum!) {
  collections(first: 6, channel: $channel) {
    edges {
      node {
        translation(languageCode: $languageCode) {
          name
        }
        ...navCollectionsItem
      }
    }
  }
}
    fragment navCollectionsItem on Collection {
  translation(languageCode: $languageCode) {
    name
  }
  ...collectionNavLinksItemFragment
}
fragment collectionNavLinksItemFragment on Collection {
  id
  ...collectionNavLinkFragment
}
fragment collectionNavLinkFragment on Collection {
  name
  slug
}`) as unknown as TypedDocumentString<GetNavCollections, GetNavCollectionsVariables>;
export const GetProductsDocument = new TypedDocumentString(`
    query getProducts($first: Int, $after: String, $last: Int, $before: String, $search: String, $filter: ProductFilterInput, $address: AddressInput, $channel: String, $languageCode: LanguageCodeEnum!) {
  products(
    first: $first
    after: $after
    last: $last
    before: $before
    search: $search
    filter: $filter
    channel: $channel
  ) {
    edges {
      node {
        id
        translation(languageCode: $languageCode) {
          name
        }
        ...productCard
      }
    }
    pageInfo {
      ...pageInfo
    }
  }
}
    fragment productCard on Product {
  name
  slug
  defaultVariant {
    pricing(address: $address) {
      ...productCardPricing
    }
  }
  isAvailable
  thumbnail(size: 4096) {
    ...image
  }
  collections {
    id
    translation(languageCode: $languageCode) {
      name
    }
    ...productCardCollectionName
  }
}
fragment productCardPricing on VariantPricingInfo {
  onSale
  price {
    gross {
      ...money
    }
  }
  priceUndiscounted {
    gross {
      ...money
    }
  }
}
fragment productCardCollectionName on Collection {
  name
}
fragment image on Image {
  url
  alt
}
fragment money on Money {
  currency
  amount
}
fragment pageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}`) as unknown as TypedDocumentString<GetProducts, GetProductsVariables>;
export const GetProductAttributesDocument = new TypedDocumentString(`
    query getProductAttributes($where: AttributeWhereInput, $channel: String, $languageCode: LanguageCodeEnum!) {
  attributes(first: 16, where: $where, channel: $channel) {
    edges {
      node {
        id
        translation(languageCode: $languageCode) {
          name
        }
        ...productAttributeFragment
      }
    }
  }
}
    fragment productAttributeFragment on Attribute {
  name
  slug
  type
  inputType
  choices(first: 20) {
    edges {
      node {
        id
        translation(languageCode: $languageCode) {
          name
        }
        ...productAttributeValueFragment
      }
    }
  }
}
fragment productAttributeValueFragment on AttributeValue {
  name
  slug
}`) as unknown as TypedDocumentString<GetProductAttributes, GetProductAttributesVariables>;
export const GetCategoryIdsDocument = new TypedDocumentString(`
    query getCategoryIds($slugs: [String!]!) {
  categories(first: 30, filter: {slugs: $slugs}) {
    edges {
      node {
        id
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCategoryIds, GetCategoryIdsVariables>;
export const GetCollectionIdsDocument = new TypedDocumentString(`
    query getCollectionIds($slugs: [String!]!, $channel: String) {
  collections(first: 10, filter: {slugs: $slugs}, channel: $channel) {
    edges {
      node {
        id
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCollectionIds, GetCollectionIdsVariables>;
export const UpdateCheckoutBillingAddressDocument = new TypedDocumentString(`
    mutation updateCheckoutBillingAddress($id: ID!, $billingAddress: AddressInput!) {
  checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<UpdateCheckoutBillingAddress, UpdateCheckoutBillingAddressVariables>;
export const GetAddressValidationRulesDocument = new TypedDocumentString(`
    query getAddressValidationRules($countryCode: CountryCode!) {
  addressValidationRules(countryCode: $countryCode) {
    postalCodeMatchers
    postalCodeExamples
    countryAreaChoices {
      raw
      verbose
    }
  }
}
    `) as unknown as TypedDocumentString<GetAddressValidationRules, GetAddressValidationRulesVariables>;
export const GetCheckoutDocument = new TypedDocumentString(`
    query getCheckout($id: ID!) {
  checkout(id: $id) {
    email
    shippingMethod: deliveryMethod {
      ... on ShippingMethod {
        id
      }
    }
    shippingMethods {
      id
      maximumDeliveryDays
      minimumDeliveryDays
      active
      price {
        ...money
      }
      name
      active
    }
    billingAddress {
      ...address
    }
    shippingAddress {
      ...address
    }
  }
}
    fragment money on Money {
  currency
  amount
}
fragment address on Address {
  country {
    code
    country
  }
  firstName
  lastName
  streetAddress1
  streetAddress2
  city
  countryArea
  postalCode
}`) as unknown as TypedDocumentString<GetCheckout, GetCheckoutVariables>;
export const GetCountryCodesDocument = new TypedDocumentString(`
    query getCountryCodes($channel: String!) {
  channel(slug: $channel) {
    countries {
      code
    }
  }
}
    `) as unknown as TypedDocumentString<GetCountryCodes, GetCountryCodesVariables>;
export const UpdateCheckoutEmailDocument = new TypedDocumentString(`
    mutation updateCheckoutEmail($id: ID!, $email: String!) {
  checkoutEmailUpdate(id: $id, email: $email) {
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<UpdateCheckoutEmail, UpdateCheckoutEmailVariables>;
export const UpdateCheckoutShippingAddressDocument = new TypedDocumentString(`
    mutation updateCheckoutShippingAddress($id: ID!, $shippingAddress: AddressInput!) {
  checkoutShippingAddressUpdate(id: $id, shippingAddress: $shippingAddress) {
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<UpdateCheckoutShippingAddress, UpdateCheckoutShippingAddressVariables>;
export const UpdateCheckoutDeliveryMethodDocument = new TypedDocumentString(`
    mutation updateCheckoutDeliveryMethod($id: ID!, $deliveryMethodId: ID!) {
  checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<UpdateCheckoutDeliveryMethod, UpdateCheckoutDeliveryMethodVariables>;
export const RefreshAccessTokenDocument = new TypedDocumentString(`
    mutation refreshAccessToken($refreshToken: String!) {
  tokenRefresh(refreshToken: $refreshToken) {
    token
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<RefreshAccessToken, RefreshAccessTokenVariables>;
export const AddCheckoutLineDocument = new TypedDocumentString(`
    mutation addCheckoutLine($id: ID, $line: CheckoutLineInput!) {
  checkoutLinesAdd(id: $id, lines: [$line]) {
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<AddCheckoutLine, AddCheckoutLineVariables>;
export const CreateCheckoutDocument = new TypedDocumentString(`
    mutation createCheckout($lines: [CheckoutLineInput!]!, $channel: String!, $languageCode: LanguageCodeEnum!, $email: String) {
  checkoutCreate(
    input: {channel: $channel, lines: $lines, languageCode: $languageCode, email: $email}
  ) {
    checkout {
      id
    }
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<CreateCheckout, CreateCheckoutVariables>;
export const GetCheckoutSummaryDocument = new TypedDocumentString(`
    query getCheckoutSummary($id: ID!, $languageCode: LanguageCodeEnum!) {
  checkout(id: $id) {
    lines {
      totalPrice {
        currency
        net {
          amount
        }
        gross {
          amount
        }
      }
      variant {
        product {
          name
          translation(languageCode: $languageCode) {
            name
          }
          media {
            url
            alt
          }
        }
      }
      quantity
      id
    }
    displayGrossPrices
    subtotalPrice {
      currency
      net {
        amount
      }
      gross {
        amount
      }
    }
    shippingPrice {
      currency
      net {
        amount
      }
      gross {
        amount
      }
    }
    totalPrice {
      currency
      net {
        amount
      }
      gross {
        amount
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCheckoutSummary, GetCheckoutSummaryVariables>;