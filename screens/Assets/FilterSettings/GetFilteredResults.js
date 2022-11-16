import { getUsersBook } from '../../../services/books-service';

function GetSortedFilterSetting(sort) {
  switch (sort) {
    case 'Newly Added':
      return { SortBy: 'createdAt', SortOrder: 'asc' };
    case 'Book Title (A-Z)':
      return { SortBy: 'title', SortOrder: 'asc' };
    case 'Book Title (Z-A)':
      return { SortBy: 'title', SortOrder: 'desc' };
    default:
      return { SortBy: 'createdAt', SortOrder: 'asc' };
  }
}

export async function GetFilteredResults(filterSetting, isFromDiscover = false) {
  console.log(filterSetting);
  let SortMethodolgy = GetSortedFilterSetting(filterSetting.sort);
  let queryParams = `?page=1&perPage=5&sortBy=${SortMethodolgy.SortBy}&sortOrder=${SortMethodolgy.SortOrder}`;
  let filterData = await getUsersBook(
    queryParams,
    filterSetting.genre,
    filterSetting.readingStatus,
    filterSetting.location,
    isFromDiscover,
  );
  return filterData;
}
