module ApplicationHelper
    def page_title(page_title = '')
        base_title = '大喜利メーカー'

        page_title.empty? ? base_title : page_title + ' | ' + base_title
    end
end
