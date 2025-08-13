export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      bottles: {
        Row: {
          alcohol_content: number | null
          brand: string | null
          category: string
          club_id: string
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          is_available: boolean | null
          is_featured: boolean | null
          name: string
          price: number
          subcategory: string | null
          updated_at: string | null
          volume_ml: number | null
        }
        Insert: {
          alcohol_content?: number | null
          brand?: string | null
          category: string
          club_id: string
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          is_featured?: boolean | null
          name: string
          price: number
          subcategory?: string | null
          updated_at?: string | null
          volume_ml?: number | null
        }
        Update: {
          alcohol_content?: number | null
          brand?: string | null
          category?: string
          club_id?: string
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          is_featured?: boolean | null
          name?: string
          price?: number
          subcategory?: string | null
          updated_at?: string | null
          volume_ml?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bottles_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "club_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bottles_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bottles_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs_with_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      club_amenities: {
        Row: {
          club_id: string
          created_at: string | null
          icon: string | null
          id: string
          name: string
        }
        Insert: {
          club_id: string
          created_at?: string | null
          icon?: string | null
          id?: string
          name: string
        }
        Update: {
          club_id?: string
          created_at?: string | null
          icon?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "club_amenities_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "club_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_amenities_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_amenities_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs_with_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      club_hours: {
        Row: {
          close_time: string | null
          club_id: string
          created_at: string | null
          day_of_week: number
          id: string
          is_closed: boolean | null
          open_time: string | null
        }
        Insert: {
          close_time?: string | null
          club_id: string
          created_at?: string | null
          day_of_week: number
          id?: string
          is_closed?: boolean | null
          open_time?: string | null
        }
        Update: {
          close_time?: string | null
          club_id?: string
          created_at?: string | null
          day_of_week?: number
          id?: string
          is_closed?: boolean | null
          open_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_hours_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "club_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_hours_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_hours_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs_with_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      club_tables: {
        Row: {
          capacity: number
          club_id: string
          created_at: string | null
          id: string
          is_active: boolean | null
          is_vip: boolean | null
          location_description: string | null
          minimum_spend: number | null
          name: string
          price: number
          updated_at: string | null
        }
        Insert: {
          capacity: number
          club_id: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          is_vip?: boolean | null
          location_description?: string | null
          minimum_spend?: number | null
          name: string
          price: number
          updated_at?: string | null
        }
        Update: {
          capacity?: number
          club_id?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          is_vip?: boolean | null
          location_description?: string | null
          minimum_spend?: number | null
          name?: string
          price?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_tables_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "club_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_tables_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_tables_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs_with_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      clubs: {
        Row: {
          age_requirement: string | null
          avg_rating: number | null
          category_id: string | null
          created_at: string | null
          description: string | null
          dress_code: string | null
          email: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          location: string
          name: string
          opening_hours: Json | null
          phone: string | null
          price_max: number | null
          price_min: number | null
          review_count: number | null
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          age_requirement?: string | null
          avg_rating?: number | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          dress_code?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          location: string
          name: string
          opening_hours?: Json | null
          phone?: string | null
          price_max?: number | null
          price_min?: number | null
          review_count?: number | null
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          age_requirement?: string | null
          avg_rating?: number | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          dress_code?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          location?: string
          name?: string
          opening_hours?: Json | null
          phone?: string | null
          price_max?: number | null
          price_min?: number | null
          review_count?: number | null
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clubs_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      clubs_bookings: {
        Row: {
          booking_date: string
          booking_type: string
          club_id: string
          confirmation_code: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          guest_count: number
          id: string
          notes: string | null
          payment_method: string | null
          payment_status: string | null
          special_requests: string | null
          status: string
          total_amount: number
          updated_at: string | null
          user_id: string
          visit_time: string | null
          zone_id: string | null
        }
        Insert: {
          booking_date: string
          booking_type?: string
          club_id: string
          confirmation_code?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          guest_count: number
          id?: string
          notes?: string | null
          payment_method?: string | null
          payment_status?: string | null
          special_requests?: string | null
          status?: string
          total_amount: number
          updated_at?: string | null
          user_id: string
          visit_time?: string | null
          zone_id?: string | null
        }
        Update: {
          booking_date?: string
          booking_type?: string
          club_id?: string
          confirmation_code?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          guest_count?: number
          id?: string
          notes?: string | null
          payment_method?: string | null
          payment_status?: string | null
          special_requests?: string | null
          status?: string
          total_amount?: number
          updated_at?: string | null
          user_id?: string
          visit_time?: string | null
          zone_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clubs_bookings_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "club_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clubs_bookings_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clubs_bookings_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs_with_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clubs_bookings_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      countries: {
        Row: {
          code: string
          id: number
          name: string
          phone_code: string
        }
        Insert: {
          code: string
          id?: number
          name: string
          phone_code: string
        }
        Update: {
          code?: string
          id?: number
          name?: string
          phone_code?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          category_id: string | null
          club_id: string | null
          created_at: string | null
          current_bookings: number | null
          description: string | null
          end_time: string
          event_date: string
          id: string
          images: string[] | null
          is_active: boolean | null
          is_featured: boolean | null
          max_capacity: number
          name: string
          special_instructions: string | null
          start_time: string
          status: string
          terms_and_conditions: string | null
          ticket_price: number
          updated_at: string | null
          user_id: string
          zone_id: string
        }
        Insert: {
          category_id?: string | null
          club_id?: string | null
          created_at?: string | null
          current_bookings?: number | null
          description?: string | null
          end_time: string
          event_date: string
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          max_capacity: number
          name: string
          special_instructions?: string | null
          start_time: string
          status?: string
          terms_and_conditions?: string | null
          ticket_price: number
          updated_at?: string | null
          user_id: string
          zone_id: string
        }
        Update: {
          category_id?: string | null
          club_id?: string | null
          created_at?: string | null
          current_bookings?: number | null
          description?: string | null
          end_time?: string
          event_date?: string
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          max_capacity?: number
          name?: string
          special_instructions?: string | null
          start_time?: string
          status?: string
          terms_and_conditions?: string | null
          ticket_price?: number
          updated_at?: string | null
          user_id?: string
          zone_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "club_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs_with_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      events_bookings: {
        Row: {
          attendee_names: string[] | null
          booking_date: string | null
          check_in_time: string | null
          confirmation_code: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          event_id: string
          id: string
          notes: string | null
          payment_method: string | null
          payment_reference: string | null
          payment_status: string | null
          qr_code: string | null
          special_requirements: string | null
          status: string
          ticket_price: number
          ticket_quantity: number
          total_amount: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          attendee_names?: string[] | null
          booking_date?: string | null
          check_in_time?: string | null
          confirmation_code?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          event_id: string
          id?: string
          notes?: string | null
          payment_method?: string | null
          payment_reference?: string | null
          payment_status?: string | null
          qr_code?: string | null
          special_requirements?: string | null
          status?: string
          ticket_price: number
          ticket_quantity: number
          total_amount: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          attendee_names?: string[] | null
          booking_date?: string | null
          check_in_time?: string | null
          confirmation_code?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          event_id?: string
          id?: string
          notes?: string | null
          payment_method?: string | null
          payment_reference?: string | null
          payment_status?: string | null
          qr_code?: string | null
          special_requirements?: string | null
          status?: string
          ticket_price?: number
          ticket_quantity?: number
          total_amount?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_bookings_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          age: number | null
          avatar_url: string | null
          created_at: string
          email: string
          id: string
          name: string
          phone_number: string | null
          updated_at: string
        }
        Insert: {
          age?: number | null
          avatar_url?: string | null
          created_at?: string
          email: string
          id: string
          name: string
          phone_number?: string | null
          updated_at?: string
        }
        Update: {
          age?: number | null
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone_number?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          club_id: string
          comment: string | null
          created_at: string | null
          id: string
          is_verified: boolean | null
          rating: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          club_id: string
          comment?: string | null
          created_at?: string | null
          id?: string
          is_verified?: boolean | null
          rating: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          club_id?: string
          comment?: string | null
          created_at?: string | null
          id?: string
          is_verified?: boolean | null
          rating?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_reviews_user_id_profiles"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "club_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs_with_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      table_bookings: {
        Row: {
          booking_date: string
          confirmation_code: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          guest_count: number
          id: string
          special_requests: string | null
          status: string
          table_id: string
          time_slot: string
          total_price: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          booking_date: string
          confirmation_code?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          guest_count: number
          id?: string
          special_requests?: string | null
          status?: string
          table_id: string
          time_slot: string
          total_price: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          booking_date?: string
          confirmation_code?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          guest_count?: number
          id?: string
          special_requests?: string | null
          status?: string
          table_id?: string
          time_slot?: string
          total_price?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "table_bookings_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "club_tables"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_bookings: {
        Row: {
          created_at: string | null
          customer_email: string
          customer_name: string
          customer_phone: string | null
          event_id: string | null
          id: string
          payment_method: string | null
          payment_status: string | null
          seats: number | null
          status: string | null
          total_amount: number | null
          updated_at: string | null
          user_id: string | null
          vendor_id: string | null
        }
        Insert: {
          created_at?: string | null
          customer_email: string
          customer_name: string
          customer_phone?: string | null
          event_id?: string | null
          id: string
          payment_method?: string | null
          payment_status?: string | null
          seats?: number | null
          status?: string | null
          total_amount?: number | null
          updated_at?: string | null
          user_id?: string | null
          vendor_id?: string | null
        }
        Update: {
          created_at?: string | null
          customer_email?: string
          customer_name?: string
          customer_phone?: string | null
          event_id?: string | null
          id?: string
          payment_method?: string | null
          payment_status?: string | null
          seats?: number | null
          status?: string | null
          total_amount?: number | null
          updated_at?: string | null
          user_id?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bookings_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "vendor_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_bookings_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_events: {
        Row: {
          booked_seats: number | null
          capacity: number | null
          created_at: string | null
          date: string | null
          description: string | null
          featured: boolean | null
          id: string
          price: number | null
          status: string | null
          title: string
          updated_at: string | null
          vendor_id: string | null
          venue: string | null
        }
        Insert: {
          booked_seats?: number | null
          capacity?: number | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          featured?: boolean | null
          id: string
          price?: number | null
          status?: string | null
          title: string
          updated_at?: string | null
          vendor_id?: string | null
          venue?: string | null
        }
        Update: {
          booked_seats?: number | null
          capacity?: number | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          price?: number | null
          status?: string | null
          title?: string
          updated_at?: string | null
          vendor_id?: string | null
          venue?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_events_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_inventory: {
        Row: {
          alcohol_content: number | null
          brand: string | null
          category: string | null
          created_at: string | null
          description: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          min_stock: number | null
          name: string
          price: number | null
          stock: number | null
          tags: string[] | null
          unit: string | null
          updated_at: string | null
          vendor_id: string | null
          volume: number | null
        }
        Insert: {
          alcohol_content?: number | null
          brand?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id: string
          image_url?: string | null
          min_stock?: number | null
          name: string
          price?: number | null
          stock?: number | null
          tags?: string[] | null
          unit?: string | null
          updated_at?: string | null
          vendor_id?: string | null
          volume?: number | null
        }
        Update: {
          alcohol_content?: number | null
          brand?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          min_stock?: number | null
          name?: string
          price?: number | null
          stock?: number | null
          tags?: string[] | null
          unit?: string | null
          updated_at?: string | null
          vendor_id?: string | null
          volume?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_inventory_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendors: {
        Row: {
          business_name: string | null
          created_at: string | null
          email: string
          id: string
          is_verified: boolean | null
          last_login_at: string | null
          name: string
          permissions: string[] | null
          phone_number: string | null
          profile_image_url: string | null
          role: string | null
        }
        Insert: {
          business_name?: string | null
          created_at?: string | null
          email: string
          id: string
          is_verified?: boolean | null
          last_login_at?: string | null
          name: string
          permissions?: string[] | null
          phone_number?: string | null
          profile_image_url?: string | null
          role?: string | null
        }
        Update: {
          business_name?: string | null
          created_at?: string | null
          email?: string
          id?: string
          is_verified?: boolean | null
          last_login_at?: string | null
          name?: string
          permissions?: string[] | null
          phone_number?: string | null
          profile_image_url?: string | null
          role?: string | null
        }
        Relationships: []
      }
      zones: {
        Row: {
          capacity: number
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          ticket_price: number
          updated_at: string | null
          zone_type: string | null
        }
        Insert: {
          capacity: number
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          ticket_price: number
          updated_at?: string | null
          zone_type?: string | null
        }
        Update: {
          capacity?: number
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          ticket_price?: number
          updated_at?: string | null
          zone_type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      club_listings: {
        Row: {
          amenities: Json | null
          avg_rating: number | null
          created_at: string | null
          description: string | null
          email: string | null
          id: string | null
          image_url: string | null
          is_active: boolean | null
          location: string | null
          name: string | null
          opening_hours: Json | null
          phone: string | null
          price_max: number | null
          price_min: number | null
          review_count: number | null
          updated_at: string | null
          website_url: string | null
        }
        Relationships: []
      }
      clubs_with_categories: {
        Row: {
          avg_rating: number | null
          category_color: string | null
          category_icon: string | null
          category_id: string | null
          category_name: string | null
          created_at: string | null
          description: string | null
          email: string | null
          id: string | null
          image_url: string | null
          is_active: boolean | null
          location: string | null
          name: string | null
          opening_hours: Json | null
          phone: string | null
          price_max: number | null
          price_min: number | null
          review_count: number | null
          updated_at: string | null
          website_url: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clubs_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      get_available_tables: {
        Args: { p_club_id: string; p_date: string; p_time_slot: string }
        Returns: {
          table_id: string
          table_name: string
          capacity: number
          price: number
          is_vip: boolean
        }[]
      }
      get_event_availability: {
        Args: { p_event_id: string }
        Returns: {
          event_name: string
          max_capacity: number
          current_bookings: number
          available_tickets: number
          is_sold_out: boolean
        }[]
      }
      get_upcoming_events: {
        Args: { p_limit?: number }
        Returns: {
          event_id: string
          event_name: string
          club_name: string
          event_date: string
          start_time: string
          ticket_price: number
          available_tickets: number
          category_name: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
