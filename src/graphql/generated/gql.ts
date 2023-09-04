/* eslint-disable */
import * as types from './graphql';
import type {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation LogInMutation($email: String!, $password: String!) {\n    tokenCreate(email: $email, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.LogInMutationDocument,
  '\n  mutation ConfirmAccountMutation($email: String!, $token: String!) {\n    confirmAccount(email: $email, token: $token) {\n      user {\n        isActive\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.ConfirmAccountMutationDocument,
  '\n  mutation RequestPasswordResetMutation(\n    $email: String!\n    $redirectUrl: String!\n    $channel: String!\n  ) {\n    requestPasswordReset(\n      email: $email\n      redirectUrl: $redirectUrl\n      channel: $channel\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.RequestPasswordResetMutationDocument,
  '\n  mutation SetPasswordMutation(\n    $email: String!\n    $token: String!\n    $password: String!\n  ) {\n    setPassword(email: $email, token: $token, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.SetPasswordMutationDocument,
  '\n  mutation SignUpMutation(\n    $email: String!\n    $password: String!\n    $channel: String!\n    $redirectUrl: String!\n  ) {\n    accountRegister(\n      input: {\n        email: $email\n        password: $password\n        channel: $channel\n        redirectUrl: $redirectUrl\n      }\n    ) {\n      user {\n        email\n      }\n      errors {\n        field\n        code\n      }\n      requiresConfirmation\n    }\n  }\n':
    types.SignUpMutationDocument,
  '\n  mutation ConfirmEmailChangeMutation($channel: String!, $token: String!) {\n    confirmEmailChange(channel: $channel, token: $token) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.ConfirmEmailChangeMutationDocument,
  '\n  mutation ChangePasswordMutation(\n    $newPassword: String!\n    $oldPassword: String!\n  ) {\n    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.ChangePasswordMutationDocument,
  '\n  mutation RequestEmailChangeMutation(\n    $channel: String!\n    $newEmail: String!\n    $password: String!\n    $redirectUrl: String!\n  ) {\n    requestEmailChange(\n      channel: $channel\n      newEmail: $newEmail\n      password: $password\n      redirectUrl: $redirectUrl\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.RequestEmailChangeMutationDocument,
  '\n  query HeaderMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "header", channel: $channel) {\n      items {\n        id\n        ...HeaderMenuItem_MenuItemFragment\n      }\n    }\n  }\n':
    types.HeaderMenu_MenuQueryDocument,
  '\n  fragment HeaderMenuItem_MenuItemFragment on MenuItem {\n    page {\n      id\n    }\n    ...HeaderMenuLink_MenuItemFragment\n    ...CategoryDropdown_MenuItemFragment\n  }\n':
    types.HeaderMenuItem_MenuItemFragmentFragmentDoc,
  '\n  fragment HeaderMenuLink_MenuItemFragment on MenuItem {\n    name\n    page {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n':
    types.HeaderMenuLink_MenuItemFragmentFragmentDoc,
  '\n  fragment CategoryDropdown_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    children {\n      id\n      ...CategoryDropdownItem_MenuItemFragment\n    }\n  }\n':
    types.CategoryDropdown_MenuItemFragmentFragmentDoc,
  '\n  fragment CategoryDropdownItem_MenuItemFragment on MenuItem {\n    ...DropdownItem_MenuItemFragment\n    ...DropdownItemWithChildren_MenuItemFragment\n    children {\n      id\n      ...DropdownItem_MenuItemFragment\n      ...DropdownItemWithChildren_MenuItemFragment\n      children {\n        id\n        ...DropdownItem_MenuItemFragment\n        ...DropdownItemWithChildren_MenuItemFragment\n      }\n    }\n  }\n':
    types.CategoryDropdownItem_MenuItemFragmentFragmentDoc,
  '\n  fragment DropdownItem_MenuItemFragment on MenuItem {\n    name\n    category {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n':
    types.DropdownItem_MenuItemFragmentFragmentDoc,
  '\n  fragment DropdownItemWithChildren_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    ...DropdownItem_MenuItemFragment\n  }\n':
    types.DropdownItemWithChildren_MenuItemFragmentFragmentDoc,
  '\n  query GetNavCategoriesQuery($languageCode: LanguageCodeEnum!) {\n    categories(level: 0, first: 12) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n          level\n          children(first: 12) {\n            edges {\n              node {\n                id\n                name\n                translation(languageCode: $languageCode) {\n                  name\n                }\n                slug\n                level\n                children(first: 12) {\n                  edges {\n                    node {\n                      id\n                      name\n                      translation(languageCode: $languageCode) {\n                        name\n                      }\n                      slug\n                      level\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetNavCategoriesQueryDocument,
  '\n  query GetNavCollectionsQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: 6, channel: $channel) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n        }\n      }\n    }\n  }\n':
    types.GetNavCollectionsQueryDocument,
  '\n  query Pagination_ProductsQuery(\n    $first: Int\n    $after: String\n    $search: String\n    $filter: ProductFilterInput\n    $address: AddressInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      search: $search\n      filter: $filter\n      channel: $channel\n    ) {\n      pageInfo {\n        ...PaginationLinks_PageInfoFragment\n      }\n      ...ProductList_ProductCountableConnectionFragment\n    }\n  }\n':
    types.Pagination_ProductsQueryDocument,
  '\n  fragment PaginationLinks_PageInfoFragment on PageInfo {\n    hasNextPage\n    endCursor\n  }\n':
    types.PaginationLinks_PageInfoFragmentFragmentDoc,
  '\n  fragment PriceBadge_VariantPricingInfoFragment on VariantPricingInfo {\n    onSale\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n    priceUndiscounted {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n':
    types.PriceBadge_VariantPricingInfoFragmentFragmentDoc,
  '\n  fragment ProductCard_ProductFragment on Product {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    defaultVariant {\n      pricing(address: $address) {\n        ...PriceBadge_VariantPricingInfoFragment\n      }\n    }\n    isAvailable\n    thumbnail(size: 4096) {\n      url\n      alt\n    }\n  }\n':
    types.ProductCard_ProductFragmentFragmentDoc,
  '\n  fragment ProductList_ProductCountableConnectionFragment on ProductCountableConnection {\n    edges {\n      node {\n        id\n        slug\n        ...ProductCard_ProductFragment\n      }\n    }\n  }\n':
    types.ProductList_ProductCountableConnectionFragmentFragmentDoc,
  '\n  query GetCategoryIdsQuery(\n    $first: Int\n    $after: String\n    $filter: CategoryFilterInput\n  ) {\n    categories(first: $first, after: $after, filter: $filter) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n':
    types.GetCategoryIdsQueryDocument,
  '\n  query getCollectionIds(\n    $first: Int\n    $after: String\n    $filter: CollectionFilterInput\n    $channel: String\n  ) {\n    collections(\n      first: $first\n      after: $after\n      filter: $filter\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n':
    types.GetCollectionIdsDocument,
  '\n  query ProductAttributes_AttributesQuery(\n    $where: AttributeWhereInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    attributes(first: 16, where: $where, channel: $channel) {\n      edges {\n        node {\n          id\n          ...ProductAttributesDropdown_AttributeFragment\n        }\n      }\n    }\n  }\n':
    types.ProductAttributes_AttributesQueryDocument,
  '\n  fragment AttributeCheckbox_AttributeFragment on AttributeValue {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n':
    types.AttributeCheckbox_AttributeFragmentFragmentDoc,
  '\n  fragment ProductAttributesDropdown_AttributeFragment on Attribute {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n    choices(first: 20) {\n      edges {\n        node {\n          id\n          ...AttributeCheckbox_AttributeFragment\n        }\n      }\n    }\n  }\n':
    types.ProductAttributesDropdown_AttributeFragmentFragmentDoc,
  '\n  fragment AddressFields_ChannelFragment on Channel {\n    ...CountrySelect_ChannelFragment\n  }\n':
    types.AddressFields_ChannelFragmentFragmentDoc,
  '\n  fragment AddressFields_AddressValidationDataFragment on AddressValidationData {\n    countryAreaChoices {\n      raw\n      verbose\n    }\n  }\n':
    types.AddressFields_AddressValidationDataFragmentFragmentDoc,
  '\n  fragment CountrySelect_ChannelFragment on Channel {\n    countries {\n      code\n    }\n  }\n':
    types.CountrySelect_ChannelFragmentFragmentDoc,
  '\n  fragment Breadcrumbs_CheckoutFragment on Checkout {\n    shippingAddress {\n      __typename\n    }\n    deliveryMethod {\n      __typename\n    }\n    billingAddress {\n      __typename\n    }\n  }\n':
    types.Breadcrumbs_CheckoutFragmentFragmentDoc,
  '\n  query Summary_Query($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      ...Lines_CheckoutFragment\n      ...Total_CheckoutFragment\n    }\n  }\n':
    types.Summary_QueryDocument,
  '\n  fragment Lines_CheckoutFragment on Checkout {\n    lines {\n      totalPrice {\n        currency\n        net {\n          amount\n        }\n        gross {\n          amount\n        }\n      }\n      variant {\n        product {\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          media {\n            url\n            alt\n          }\n        }\n      }\n      quantity\n      id\n    }\n    displayGrossPrices\n  }\n':
    types.Lines_CheckoutFragmentFragmentDoc,
  '\n  fragment Total_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n':
    types.Total_CheckoutFragmentFragmentDoc,
  '\n  mutation UpdateCheckoutBillingAddressMutation(\n    $id: ID!\n    $billingAddress: AddressInput!\n  ) {\n    checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.UpdateCheckoutBillingAddressMutationDocument,
  '\n  fragment BillingAddressForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n':
    types.BillingAddressForm_ChannelFragmentFragmentDoc,
  '\n  fragment BillingAddressForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n':
    types.BillingAddressForm_AddressValidationDataFragmentFragmentDoc,
  '\n  query BillingSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...BillingAddressForm_ChannelFragment\n    }\n  }\n':
    types.BillingSection_ChannelQueryDocument,
  '\n  query BillingSection_AddressValidationRulesQuery($countryCode: CountryCode!) {\n    addressValidationRules(countryCode: $countryCode) {\n      countryAreaChoices {\n        raw\n      }\n      ...BillingAddressForm_AddressValidationDataFragment\n    }\n  }\n':
    types.BillingSection_AddressValidationRulesQueryDocument,
  '\n  fragment BillingSection_CheckoutFragment on Checkout {\n    email\n    billingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n':
    types.BillingSection_CheckoutFragmentFragmentDoc,
  '\n  query BillingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...BillingSection_CheckoutFragment\n    }\n  }\n':
    types.BillingPage_CheckoutQueryDocument,
  '\n  query InformationSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...InformationForm_ChannelFragment\n    }\n  }\n':
    types.InformationSection_ChannelQueryDocument,
  '\n  query InformationSection_AddressValidationRulesQuery(\n    $countryCode: CountryCode!\n  ) {\n    addressValidationRules(countryCode: $countryCode) {\n      countryAreaChoices {\n        raw\n      }\n      ...InformationForm_AddressValidationDataFragment\n    }\n  }\n':
    types.InformationSection_AddressValidationRulesQueryDocument,
  '\n  fragment InformationSection_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n':
    types.InformationSection_CheckoutFragmentFragmentDoc,
  '\n  fragment InformationForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n':
    types.InformationForm_ChannelFragmentFragmentDoc,
  '\n  fragment InformationForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n':
    types.InformationForm_AddressValidationDataFragmentFragmentDoc,
  '\n  mutation UpdateCheckoutEmailMutation($id: ID!, $email: String!) {\n    checkoutEmailUpdate(id: $id, email: $email) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.UpdateCheckoutEmailMutationDocument,
  '\n  mutation UpdateCheckoutShippingAddressMutation(\n    $id: ID!\n    $shippingAddress: AddressInput!\n  ) {\n    checkoutShippingAddressUpdate(id: $id, shippingAddress: $shippingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.UpdateCheckoutShippingAddressMutationDocument,
  '\n  query InformationPage_Query($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n':
    types.InformationPage_QueryDocument,
  '\n  query PaymentPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n':
    types.PaymentPage_CheckoutQueryDocument,
  '\n  fragment ShippingMethodSection_CheckoutFragment on Checkout {\n    ...ShippingMethodForm_CheckoutFragment\n  }\n':
    types.ShippingMethodSection_CheckoutFragmentFragmentDoc,
  '\n  fragment ShippingMethodForm_CheckoutFragment on Checkout {\n    shippingMethod: deliveryMethod {\n      ... on ShippingMethod {\n        id\n      }\n    }\n    shippingMethods {\n      id\n      active\n      ...ShippingMethodRadioItem_ShippingMethod\n    }\n  }\n':
    types.ShippingMethodForm_CheckoutFragmentFragmentDoc,
  '\n  fragment ShippingMethodRadioItem_ShippingMethod on ShippingMethod {\n    id\n    name\n    minimumDeliveryDays\n    maximumDeliveryDays\n    price {\n      currency\n      amount\n    }\n  }\n':
    types.ShippingMethodRadioItem_ShippingMethodFragmentDoc,
  '\n  mutation UpdateCheckoutDeliveryMethodMutation(\n    $id: ID!\n    $deliveryMethodId: ID!\n  ) {\n    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.UpdateCheckoutDeliveryMethodMutationDocument,
  '\n  fragment ShippingReviewTable_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      streetAddress1\n      city\n      countryArea\n      postalCode\n      country {\n        code\n      }\n    }\n  }\n':
    types.ShippingReviewTable_CheckoutFragmentFragmentDoc,
  '\n  query ShippingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...ShippingReviewTable_CheckoutFragment\n      ...ShippingMethodSection_CheckoutFragment\n    }\n  }\n':
    types.ShippingPage_CheckoutQueryDocument,
  '\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n':
    types.RefreshAccessTokenMutationDocument,
  '\n  mutation AddCheckoutLineMutation($id: ID, $line: CheckoutLineInput!) {\n    checkoutLinesAdd(id: $id, lines: [$line]) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.AddCheckoutLineMutationDocument,
  '\n  mutation CreateCheckoutMutation(\n    $lines: [CheckoutLineInput!]!\n    $channel: String!\n    $languageCode: LanguageCodeEnum!\n    $email: String\n  ) {\n    checkoutCreate(\n      input: {\n        channel: $channel\n        lines: $lines\n        languageCode: $languageCode\n        email: $email\n      }\n    ) {\n      checkout {\n        id\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
    types.CreateCheckoutMutationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation LogInMutation($email: String!, $password: String!) {\n    tokenCreate(email: $email, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation LogInMutation($email: String!, $password: String!) {\n    tokenCreate(email: $email, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation ConfirmAccountMutation($email: String!, $token: String!) {\n    confirmAccount(email: $email, token: $token) {\n      user {\n        isActive\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation ConfirmAccountMutation($email: String!, $token: String!) {\n    confirmAccount(email: $email, token: $token) {\n      user {\n        isActive\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RequestPasswordResetMutation(\n    $email: String!\n    $redirectUrl: String!\n    $channel: String!\n  ) {\n    requestPasswordReset(\n      email: $email\n      redirectUrl: $redirectUrl\n      channel: $channel\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation RequestPasswordResetMutation(\n    $email: String!\n    $redirectUrl: String!\n    $channel: String!\n  ) {\n    requestPasswordReset(\n      email: $email\n      redirectUrl: $redirectUrl\n      channel: $channel\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation SetPasswordMutation(\n    $email: String!\n    $token: String!\n    $password: String!\n  ) {\n    setPassword(email: $email, token: $token, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation SetPasswordMutation(\n    $email: String!\n    $token: String!\n    $password: String!\n  ) {\n    setPassword(email: $email, token: $token, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation SignUpMutation(\n    $email: String!\n    $password: String!\n    $channel: String!\n    $redirectUrl: String!\n  ) {\n    accountRegister(\n      input: {\n        email: $email\n        password: $password\n        channel: $channel\n        redirectUrl: $redirectUrl\n      }\n    ) {\n      user {\n        email\n      }\n      errors {\n        field\n        code\n      }\n      requiresConfirmation\n    }\n  }\n',
): (typeof documents)['\n  mutation SignUpMutation(\n    $email: String!\n    $password: String!\n    $channel: String!\n    $redirectUrl: String!\n  ) {\n    accountRegister(\n      input: {\n        email: $email\n        password: $password\n        channel: $channel\n        redirectUrl: $redirectUrl\n      }\n    ) {\n      user {\n        email\n      }\n      errors {\n        field\n        code\n      }\n      requiresConfirmation\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation ConfirmEmailChangeMutation($channel: String!, $token: String!) {\n    confirmEmailChange(channel: $channel, token: $token) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation ConfirmEmailChangeMutation($channel: String!, $token: String!) {\n    confirmEmailChange(channel: $channel, token: $token) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation ChangePasswordMutation(\n    $newPassword: String!\n    $oldPassword: String!\n  ) {\n    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation ChangePasswordMutation(\n    $newPassword: String!\n    $oldPassword: String!\n  ) {\n    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RequestEmailChangeMutation(\n    $channel: String!\n    $newEmail: String!\n    $password: String!\n    $redirectUrl: String!\n  ) {\n    requestEmailChange(\n      channel: $channel\n      newEmail: $newEmail\n      password: $password\n      redirectUrl: $redirectUrl\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation RequestEmailChangeMutation(\n    $channel: String!\n    $newEmail: String!\n    $password: String!\n    $redirectUrl: String!\n  ) {\n    requestEmailChange(\n      channel: $channel\n      newEmail: $newEmail\n      password: $password\n      redirectUrl: $redirectUrl\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query HeaderMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "header", channel: $channel) {\n      items {\n        id\n        ...HeaderMenuItem_MenuItemFragment\n      }\n    }\n  }\n',
): (typeof documents)['\n  query HeaderMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "header", channel: $channel) {\n      items {\n        id\n        ...HeaderMenuItem_MenuItemFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment HeaderMenuItem_MenuItemFragment on MenuItem {\n    page {\n      id\n    }\n    ...HeaderMenuLink_MenuItemFragment\n    ...CategoryDropdown_MenuItemFragment\n  }\n',
): (typeof documents)['\n  fragment HeaderMenuItem_MenuItemFragment on MenuItem {\n    page {\n      id\n    }\n    ...HeaderMenuLink_MenuItemFragment\n    ...CategoryDropdown_MenuItemFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment HeaderMenuLink_MenuItemFragment on MenuItem {\n    name\n    page {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n',
): (typeof documents)['\n  fragment HeaderMenuLink_MenuItemFragment on MenuItem {\n    name\n    page {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CategoryDropdown_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    children {\n      id\n      ...CategoryDropdownItem_MenuItemFragment\n    }\n  }\n',
): (typeof documents)['\n  fragment CategoryDropdown_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    children {\n      id\n      ...CategoryDropdownItem_MenuItemFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CategoryDropdownItem_MenuItemFragment on MenuItem {\n    ...DropdownItem_MenuItemFragment\n    ...DropdownItemWithChildren_MenuItemFragment\n    children {\n      id\n      ...DropdownItem_MenuItemFragment\n      ...DropdownItemWithChildren_MenuItemFragment\n      children {\n        id\n        ...DropdownItem_MenuItemFragment\n        ...DropdownItemWithChildren_MenuItemFragment\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment CategoryDropdownItem_MenuItemFragment on MenuItem {\n    ...DropdownItem_MenuItemFragment\n    ...DropdownItemWithChildren_MenuItemFragment\n    children {\n      id\n      ...DropdownItem_MenuItemFragment\n      ...DropdownItemWithChildren_MenuItemFragment\n      children {\n        id\n        ...DropdownItem_MenuItemFragment\n        ...DropdownItemWithChildren_MenuItemFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment DropdownItem_MenuItemFragment on MenuItem {\n    name\n    category {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n',
): (typeof documents)['\n  fragment DropdownItem_MenuItemFragment on MenuItem {\n    name\n    category {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment DropdownItemWithChildren_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    ...DropdownItem_MenuItemFragment\n  }\n',
): (typeof documents)['\n  fragment DropdownItemWithChildren_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    ...DropdownItem_MenuItemFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetNavCategoriesQuery($languageCode: LanguageCodeEnum!) {\n    categories(level: 0, first: 12) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n          level\n          children(first: 12) {\n            edges {\n              node {\n                id\n                name\n                translation(languageCode: $languageCode) {\n                  name\n                }\n                slug\n                level\n                children(first: 12) {\n                  edges {\n                    node {\n                      id\n                      name\n                      translation(languageCode: $languageCode) {\n                        name\n                      }\n                      slug\n                      level\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetNavCategoriesQuery($languageCode: LanguageCodeEnum!) {\n    categories(level: 0, first: 12) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n          level\n          children(first: 12) {\n            edges {\n              node {\n                id\n                name\n                translation(languageCode: $languageCode) {\n                  name\n                }\n                slug\n                level\n                children(first: 12) {\n                  edges {\n                    node {\n                      id\n                      name\n                      translation(languageCode: $languageCode) {\n                        name\n                      }\n                      slug\n                      level\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetNavCollectionsQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: 6, channel: $channel) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetNavCollectionsQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: 6, channel: $channel) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Pagination_ProductsQuery(\n    $first: Int\n    $after: String\n    $search: String\n    $filter: ProductFilterInput\n    $address: AddressInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      search: $search\n      filter: $filter\n      channel: $channel\n    ) {\n      pageInfo {\n        ...PaginationLinks_PageInfoFragment\n      }\n      ...ProductList_ProductCountableConnectionFragment\n    }\n  }\n',
): (typeof documents)['\n  query Pagination_ProductsQuery(\n    $first: Int\n    $after: String\n    $search: String\n    $filter: ProductFilterInput\n    $address: AddressInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      search: $search\n      filter: $filter\n      channel: $channel\n    ) {\n      pageInfo {\n        ...PaginationLinks_PageInfoFragment\n      }\n      ...ProductList_ProductCountableConnectionFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PaginationLinks_PageInfoFragment on PageInfo {\n    hasNextPage\n    endCursor\n  }\n',
): (typeof documents)['\n  fragment PaginationLinks_PageInfoFragment on PageInfo {\n    hasNextPage\n    endCursor\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PriceBadge_VariantPricingInfoFragment on VariantPricingInfo {\n    onSale\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n    priceUndiscounted {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment PriceBadge_VariantPricingInfoFragment on VariantPricingInfo {\n    onSale\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n    priceUndiscounted {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProductCard_ProductFragment on Product {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    defaultVariant {\n      pricing(address: $address) {\n        ...PriceBadge_VariantPricingInfoFragment\n      }\n    }\n    isAvailable\n    thumbnail(size: 4096) {\n      url\n      alt\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductCard_ProductFragment on Product {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    defaultVariant {\n      pricing(address: $address) {\n        ...PriceBadge_VariantPricingInfoFragment\n      }\n    }\n    isAvailable\n    thumbnail(size: 4096) {\n      url\n      alt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProductList_ProductCountableConnectionFragment on ProductCountableConnection {\n    edges {\n      node {\n        id\n        slug\n        ...ProductCard_ProductFragment\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductList_ProductCountableConnectionFragment on ProductCountableConnection {\n    edges {\n      node {\n        id\n        slug\n        ...ProductCard_ProductFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCategoryIdsQuery(\n    $first: Int\n    $after: String\n    $filter: CategoryFilterInput\n  ) {\n    categories(first: $first, after: $after, filter: $filter) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCategoryIdsQuery(\n    $first: Int\n    $after: String\n    $filter: CategoryFilterInput\n  ) {\n    categories(first: $first, after: $after, filter: $filter) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getCollectionIds(\n    $first: Int\n    $after: String\n    $filter: CollectionFilterInput\n    $channel: String\n  ) {\n    collections(\n      first: $first\n      after: $after\n      filter: $filter\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getCollectionIds(\n    $first: Int\n    $after: String\n    $filter: CollectionFilterInput\n    $channel: String\n  ) {\n    collections(\n      first: $first\n      after: $after\n      filter: $filter\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ProductAttributes_AttributesQuery(\n    $where: AttributeWhereInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    attributes(first: 16, where: $where, channel: $channel) {\n      edges {\n        node {\n          id\n          ...ProductAttributesDropdown_AttributeFragment\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query ProductAttributes_AttributesQuery(\n    $where: AttributeWhereInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    attributes(first: 16, where: $where, channel: $channel) {\n      edges {\n        node {\n          id\n          ...ProductAttributesDropdown_AttributeFragment\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AttributeCheckbox_AttributeFragment on AttributeValue {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n',
): (typeof documents)['\n  fragment AttributeCheckbox_AttributeFragment on AttributeValue {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProductAttributesDropdown_AttributeFragment on Attribute {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n    choices(first: 20) {\n      edges {\n        node {\n          id\n          ...AttributeCheckbox_AttributeFragment\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductAttributesDropdown_AttributeFragment on Attribute {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n    choices(first: 20) {\n      edges {\n        node {\n          id\n          ...AttributeCheckbox_AttributeFragment\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AddressFields_ChannelFragment on Channel {\n    ...CountrySelect_ChannelFragment\n  }\n',
): (typeof documents)['\n  fragment AddressFields_ChannelFragment on Channel {\n    ...CountrySelect_ChannelFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AddressFields_AddressValidationDataFragment on AddressValidationData {\n    countryAreaChoices {\n      raw\n      verbose\n    }\n  }\n',
): (typeof documents)['\n  fragment AddressFields_AddressValidationDataFragment on AddressValidationData {\n    countryAreaChoices {\n      raw\n      verbose\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CountrySelect_ChannelFragment on Channel {\n    countries {\n      code\n    }\n  }\n',
): (typeof documents)['\n  fragment CountrySelect_ChannelFragment on Channel {\n    countries {\n      code\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Breadcrumbs_CheckoutFragment on Checkout {\n    shippingAddress {\n      __typename\n    }\n    deliveryMethod {\n      __typename\n    }\n    billingAddress {\n      __typename\n    }\n  }\n',
): (typeof documents)['\n  fragment Breadcrumbs_CheckoutFragment on Checkout {\n    shippingAddress {\n      __typename\n    }\n    deliveryMethod {\n      __typename\n    }\n    billingAddress {\n      __typename\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Summary_Query($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      ...Lines_CheckoutFragment\n      ...Total_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query Summary_Query($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      ...Lines_CheckoutFragment\n      ...Total_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Lines_CheckoutFragment on Checkout {\n    lines {\n      totalPrice {\n        currency\n        net {\n          amount\n        }\n        gross {\n          amount\n        }\n      }\n      variant {\n        product {\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          media {\n            url\n            alt\n          }\n        }\n      }\n      quantity\n      id\n    }\n    displayGrossPrices\n  }\n',
): (typeof documents)['\n  fragment Lines_CheckoutFragment on Checkout {\n    lines {\n      totalPrice {\n        currency\n        net {\n          amount\n        }\n        gross {\n          amount\n        }\n      }\n      variant {\n        product {\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          media {\n            url\n            alt\n          }\n        }\n      }\n      quantity\n      id\n    }\n    displayGrossPrices\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Total_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n',
): (typeof documents)['\n  fragment Total_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCheckoutBillingAddressMutation(\n    $id: ID!\n    $billingAddress: AddressInput!\n  ) {\n    checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutBillingAddressMutation(\n    $id: ID!\n    $billingAddress: AddressInput!\n  ) {\n    checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment BillingAddressForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n',
): (typeof documents)['\n  fragment BillingAddressForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment BillingAddressForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n',
): (typeof documents)['\n  fragment BillingAddressForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query BillingSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...BillingAddressForm_ChannelFragment\n    }\n  }\n',
): (typeof documents)['\n  query BillingSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...BillingAddressForm_ChannelFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query BillingSection_AddressValidationRulesQuery($countryCode: CountryCode!) {\n    addressValidationRules(countryCode: $countryCode) {\n      countryAreaChoices {\n        raw\n      }\n      ...BillingAddressForm_AddressValidationDataFragment\n    }\n  }\n',
): (typeof documents)['\n  query BillingSection_AddressValidationRulesQuery($countryCode: CountryCode!) {\n    addressValidationRules(countryCode: $countryCode) {\n      countryAreaChoices {\n        raw\n      }\n      ...BillingAddressForm_AddressValidationDataFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment BillingSection_CheckoutFragment on Checkout {\n    email\n    billingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n',
): (typeof documents)['\n  fragment BillingSection_CheckoutFragment on Checkout {\n    email\n    billingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query BillingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...BillingSection_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query BillingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...BillingSection_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query InformationSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...InformationForm_ChannelFragment\n    }\n  }\n',
): (typeof documents)['\n  query InformationSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...InformationForm_ChannelFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query InformationSection_AddressValidationRulesQuery(\n    $countryCode: CountryCode!\n  ) {\n    addressValidationRules(countryCode: $countryCode) {\n      countryAreaChoices {\n        raw\n      }\n      ...InformationForm_AddressValidationDataFragment\n    }\n  }\n',
): (typeof documents)['\n  query InformationSection_AddressValidationRulesQuery(\n    $countryCode: CountryCode!\n  ) {\n    addressValidationRules(countryCode: $countryCode) {\n      countryAreaChoices {\n        raw\n      }\n      ...InformationForm_AddressValidationDataFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment InformationSection_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n',
): (typeof documents)['\n  fragment InformationSection_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment InformationForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n',
): (typeof documents)['\n  fragment InformationForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment InformationForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n',
): (typeof documents)['\n  fragment InformationForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCheckoutEmailMutation($id: ID!, $email: String!) {\n    checkoutEmailUpdate(id: $id, email: $email) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutEmailMutation($id: ID!, $email: String!) {\n    checkoutEmailUpdate(id: $id, email: $email) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCheckoutShippingAddressMutation(\n    $id: ID!\n    $shippingAddress: AddressInput!\n  ) {\n    checkoutShippingAddressUpdate(id: $id, shippingAddress: $shippingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutShippingAddressMutation(\n    $id: ID!\n    $shippingAddress: AddressInput!\n  ) {\n    checkoutShippingAddressUpdate(id: $id, shippingAddress: $shippingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query InformationPage_Query($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query InformationPage_Query($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PaymentPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query PaymentPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ShippingMethodSection_CheckoutFragment on Checkout {\n    ...ShippingMethodForm_CheckoutFragment\n  }\n',
): (typeof documents)['\n  fragment ShippingMethodSection_CheckoutFragment on Checkout {\n    ...ShippingMethodForm_CheckoutFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ShippingMethodForm_CheckoutFragment on Checkout {\n    shippingMethod: deliveryMethod {\n      ... on ShippingMethod {\n        id\n      }\n    }\n    shippingMethods {\n      id\n      active\n      ...ShippingMethodRadioItem_ShippingMethod\n    }\n  }\n',
): (typeof documents)['\n  fragment ShippingMethodForm_CheckoutFragment on Checkout {\n    shippingMethod: deliveryMethod {\n      ... on ShippingMethod {\n        id\n      }\n    }\n    shippingMethods {\n      id\n      active\n      ...ShippingMethodRadioItem_ShippingMethod\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ShippingMethodRadioItem_ShippingMethod on ShippingMethod {\n    id\n    name\n    minimumDeliveryDays\n    maximumDeliveryDays\n    price {\n      currency\n      amount\n    }\n  }\n',
): (typeof documents)['\n  fragment ShippingMethodRadioItem_ShippingMethod on ShippingMethod {\n    id\n    name\n    minimumDeliveryDays\n    maximumDeliveryDays\n    price {\n      currency\n      amount\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCheckoutDeliveryMethodMutation(\n    $id: ID!\n    $deliveryMethodId: ID!\n  ) {\n    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutDeliveryMethodMutation(\n    $id: ID!\n    $deliveryMethodId: ID!\n  ) {\n    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ShippingReviewTable_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      streetAddress1\n      city\n      countryArea\n      postalCode\n      country {\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment ShippingReviewTable_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      streetAddress1\n      city\n      countryArea\n      postalCode\n      country {\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ShippingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...ShippingReviewTable_CheckoutFragment\n      ...ShippingMethodSection_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query ShippingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...ShippingReviewTable_CheckoutFragment\n      ...ShippingMethodSection_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddCheckoutLineMutation($id: ID, $line: CheckoutLineInput!) {\n    checkoutLinesAdd(id: $id, lines: [$line]) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation AddCheckoutLineMutation($id: ID, $line: CheckoutLineInput!) {\n    checkoutLinesAdd(id: $id, lines: [$line]) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateCheckoutMutation(\n    $lines: [CheckoutLineInput!]!\n    $channel: String!\n    $languageCode: LanguageCodeEnum!\n    $email: String\n  ) {\n    checkoutCreate(\n      input: {\n        channel: $channel\n        lines: $lines\n        languageCode: $languageCode\n        email: $email\n      }\n    ) {\n      checkout {\n        id\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateCheckoutMutation(\n    $lines: [CheckoutLineInput!]!\n    $channel: String!\n    $languageCode: LanguageCodeEnum!\n    $email: String\n  ) {\n    checkoutCreate(\n      input: {\n        channel: $channel\n        lines: $lines\n        languageCode: $languageCode\n        email: $email\n      }\n    ) {\n      checkout {\n        id\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
