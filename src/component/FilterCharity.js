import React from 'react'
export function filterCharity(searchText,data) {
    return data.filter((value) => {
        return value.keywords.indexOf(searchText) != -1
    })
}
